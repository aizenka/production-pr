import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { PROFILE_PAGE_NAMESPACE } from '@/shared/constants/i18n'
import { classNames } from '@/shared/lib/common'
import { Row, Button, Text } from '@/shared/ui'
import { useAppDispatch } from '@/shared/lib/hooks'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services'
import { getProfileData, getProfileReadOnly } from '../../model/selectors'

interface EditableProfileHeaderProps {
  className?: string
}

export const EditableProfileHeader = memo(({ className }: EditableProfileHeaderProps) => {
  const { t } = useTranslation(PROFILE_PAGE_NAMESPACE)
  const dispatch = useAppDispatch()
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)

  const canEdit = authData?.id === profileData?.id

  const readonly = useSelector(getProfileReadOnly)

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onEditCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <Row
      className={classNames('', {}, [className])}
      align='between'
      vAlign='center'
    >
      <Text title={t('profile')}/>
      {
        canEdit && (
          <div>
            {
              readonly ? (
                <Button
                  variant='outlined'
                  onClick={onEdit}
                  data-testid='EditableProfileHeader.EditBtn'
                >
                  {t('edit')}
                </Button>
              )
                : (
                  <Row gap={16}>
                    <Button
                      variant='outlinedDanger'
                      onClick={onEditCancel}
                      data-testid='EditableProfileHeader.CancelBtn'
                    >
                      {t('cancelEdit')}
                    </Button>
                    <Button
                      variant='outlined'
                      onClick={onSave}
                      data-testid='EditableProfileHeader.SaveBtn'
                    >
                      {t('save')}
                    </Button>
                  </Row>
                )
            }
          </div>
        )
      }
    </Row>
  )
})