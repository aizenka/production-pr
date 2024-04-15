import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { ProfileCard } from '@/entities/Profile'
import { PROFILE_PAGE_NAMESPACE } from '@/shared/constants/i18n'
import { Column, Text } from '@/shared/ui'
import { TextType } from '@/shared/ui/Text/Text'
import { classNames } from '@/shared/lib/common'
import {
  useAppDispatch,
  useDynamicModuleLoader,
  useInitialEffect
} from '@/shared/lib/hooks'
import {
  getProfileForm,
  getProfileLoading,
  getProfileError,
  getProfileValidateErrors,
  getProfileReadOnly
} from '../model/selectors'
import { fetchProfileData } from '../model/services'
import { profileActions, profileReducer } from '../model/slice/profileSlice'
import { EditableProfileHeader } from './EditableProfileHeader/EditableProfileHeader'
import { ValidateProfileError } from '../model/consts'
import type { ReducersList } from '@/shared/lib/hooks/useDynamicModuleLoader'
import type { Currency } from '@/entities/Currency'
import type { Country } from '@/entities/Country'

interface EditableProfileCardProps {
  className?: string,
  id: string
}

const reducers: ReducersList = {
  profile: profileReducer
}


export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id: profileId } = props
  useDynamicModuleLoader(reducers)
  const { t } = useTranslation(PROFILE_PAGE_NAMESPACE)

  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileLoading)
  const error = useSelector(getProfileError)
  const validateErrors = useSelector(getProfileValidateErrors)
  const readonly = useSelector(getProfileReadOnly)

  useInitialEffect(() => {
    if (profileId) {
      dispatch(fetchProfileData(profileId))
    }
  }, [profileId])

  const VALIDATE_ERROR_TRASLATES_MAP: Record<ValidateProfileError, string> = {
    [ValidateProfileError.NO_DATA]: t('noProfileData'),
    [ValidateProfileError.SERVER_ERROR]: t('serverError'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('incorrectUserData'),
    [ValidateProfileError.INCORRECT_USER_AGE]: t('incorrectAge'),
    [ValidateProfileError.INCORRECT_USER_CITY]: t('incorrectCity'),
    [ValidateProfileError.INCORRECT_USERNAME]: t('incorrectUsername')
  }

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfileForm({ firstName: value }))
  }, [dispatch])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfileForm({ lastName: value }))
  }, [dispatch])

  const onChangeAge= useCallback((value?: string) => {
    dispatch(profileActions.updateProfileForm({ age: Number(value) }))
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfileForm({ city: value }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfileForm({ avatarUrl: value }))
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfileForm({ username: value }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfileForm({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfileForm({ country }))
  }, [dispatch])

  return (
    <Column
      className={classNames('', {}, [className])}
      gap={32}
    >
      <EditableProfileHeader />
      {
        !!validateErrors?.length && (
          validateErrors.map((err: ValidateProfileError) => {
            return (
              <Text
                key={err}
                type={TextType.ERROR}
                text={VALIDATE_ERROR_TRASLATES_MAP[err]}
                data-testid='EditableProfileCard.TextError'
              />
            )
          })
        )
      }
      <ProfileCard
        profileData={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeAvatar={onChangeAvatar}
        onChangeUsername={onChangeUsername}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </Column>
  )
})
