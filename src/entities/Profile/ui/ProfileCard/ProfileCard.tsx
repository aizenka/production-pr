import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { PROFILE_PAGE_NAMESPACE } from 'shared/constants/i18n'
import { classNames } from 'shared/lib/common'
import { Button, Input, Text } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import {
  getProfileData
  // getProfileError,
  // getProfileLoading
} from '../../model/selectors'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = memo(({ className }: ProfileCardProps) => {
  const { t } = useTranslation(PROFILE_PAGE_NAMESPACE)

  const data = useSelector(getProfileData)
  // const error = useSelector(getProfileError)
  // const isLoading = useSelector(getProfileLoading)

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('profile')}/>
        <Button
          className={cls.editBtn}
          variant={ButtonVariant.OUTLINED}
        >
          {t('edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.firstName}
          placeholder={t('typeName')}
        />
        <Input
          value={data?.lastName}
          placeholder={t('typeLastName')}
        />
      </div>
    </div>
  )
})