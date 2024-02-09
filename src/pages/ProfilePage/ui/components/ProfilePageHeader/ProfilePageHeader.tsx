import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import {
  getProfileData,
  getProfileReadOnly,
  profileActions,
  updateProfileData
} from 'entities/Profile'
import { PROFILE_PAGE_NAMESPACE } from 'shared/constants/i18n'
import { classNames } from 'shared/lib/common'
import { Button, Text } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { useAppDispatch } from 'shared/lib/hooks'
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
  className?: string
}

const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
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
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('profile')}/>
      {
        canEdit && (
          <div>
            {
              readonly ? (
                <Button
                  variant={ButtonVariant.OUTLINED}
                  onClick={onEdit}
                >
                  {t('edit')}
                </Button>
              )
                : (
                  <div className={cls.btnGroup}>
                    <Button
                      variant={ButtonVariant.OUTLINED_DANGER}
                      onClick={onEditCancel}
                    >
                      {t('cancelEdit')}
                    </Button>
                    <Button
                      variant={ButtonVariant.OUTLINED}
                      onClick={onSave}
                    >
                      {t('save')}
                    </Button>
                  </div>
                )
            }
          </div>
        )
      }
    </div>
  )
}

export default memo(ProfilePageHeader)