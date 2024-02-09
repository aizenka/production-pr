import { memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { PageWrapper } from 'widgets/PageWrapper'
import { Text } from 'shared/ui'
import { TextType } from 'shared/ui/Text/Text'
import { classNames } from 'shared/lib/common'
import { PROFILE_PAGE_NAMESPACE } from 'shared/constants/i18n'
import {
  fetchProfileData,
  getProfileError,
  getProfileLoading,
  getProfileReadOnly,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError
} from 'entities/Profile'
import {
  getProfileForm,
  getProfileValidateErrors
} from 'entities/Profile/model/selectors'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ProfilePageHeader } from './components'
import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader'
import {
  useAppDispatch,
  useDynamicModuleLoader,
  useInitialEffect
} from 'shared/lib/hooks'
import cls from './ProfilePage.module.scss'

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

export default memo(function ProfilePage ({ className }: ProfilePageProps) {
  useDynamicModuleLoader(reducers)
  const { id: profileId } = useParams<{id: string}>()
  const dispatch = useAppDispatch()
  const { t } = useTranslation(PROFILE_PAGE_NAMESPACE)

  /* TODO:
    Create an EditableProfileCard feature that contains all the necessary logic and sells
    this logic and data inside the ProfileCard
  */
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
    <PageWrapper className={classNames(cls.profilePage, {}, [className])}>
      <ProfilePageHeader />
      {
        !!validateErrors?.length && (
          validateErrors.map(err => {
            return (
              <Text
                key={err}
                type={TextType.ERROR}
                text={VALIDATE_ERROR_TRASLATES_MAP[err]}
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
    </PageWrapper>
  )
})