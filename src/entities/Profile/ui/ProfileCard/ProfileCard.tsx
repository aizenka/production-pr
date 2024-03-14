import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import type { Currency } from '@/entities/Currency'
import { CurrencySelect } from '@/entities/Currency'
import type { Country } from '@/entities/Country'
import { CountrySelect } from '@/entities/Country'
import { PROFILE_PAGE_NAMESPACE } from '@/shared/constants/i18n'
import { classNames } from '@/shared/lib/common'
import type { ClsMods } from '@/shared/lib/common/classNames/classNames'
import { Avatar, Column, Input, RippleLoader, Text } from '@/shared/ui'
import { TextAlign, TextType } from '@/shared/ui/Text/Text'
import type { Profile } from '../../model/types/Profile'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  profileData?: Profile,
  isLoading?: boolean,
  error?: string,
  readonly?: boolean,
  onChangeFirstname?: (value: string) => void
  onChangeLastname?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeUsername?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    className,
    profileData,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props

  const { t } = useTranslation(PROFILE_PAGE_NAMESPACE)

  if (isLoading) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
        <RippleLoader />
      </div>
    )
  }

  // TODO: add empty state component
  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          type={TextType.ERROR}
          align={TextAlign.CENTER}
          title={t('profileLoadingErrorTitle')}
          text={t('profileLoadingErrorDescription')}
        />
      </div>
    )
  }

  const mods:ClsMods = {
    [cls.isEdit]: !readonly
  }

  return (
    <Column
      className={classNames(cls.profileCard, mods, [className])}
      gap={16}
    >
      <Column gap={16}>
        {
          profileData?.avatarUrl && (
            <Avatar
              className={cls.avatar}
              src={profileData.avatarUrl}
              alt='profile image'
            />
          )
        }
        <Input
          value={profileData?.firstName}
          placeholder={t('typeName')}
          readonly={readonly}
          onChange={onChangeFirstname}
          data-testid='ProfileCard.firstName'
        />
        <Input
          value={profileData?.lastName}
          placeholder={t('typeLastName')}
          readonly={readonly}
          onChange={onChangeLastname}
          data-testid='ProfileCard.lastName'
        />
        <Input
          value={profileData?.age}
          placeholder={t('typeAge')}
          readonly={readonly}
          onChange={onChangeAge}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault()
            }
          }}
        />
        <CountrySelect
          value={profileData?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
        <Input
          value={profileData?.city}
          placeholder={t('typeCity')}
          readonly={readonly}
          onChange={onChangeCity}
        />
        <CurrencySelect
          value={profileData?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <Input
          value={profileData?.avatarUrl}
          placeholder={t('typeAvatarUrl')}
          readonly={readonly}
          onChange={onChangeAvatar}
        />
        <Input
          value={profileData?.username}
          placeholder={t('typeUsername')}
          readonly={readonly}
          onChange={onChangeUsername}
        />
      </Column>
    </Column>
  )
})