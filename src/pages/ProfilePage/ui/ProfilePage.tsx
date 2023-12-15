import { memo, useCallback, useEffect } from 'react'
import {
  fetchProfileData,
  getProfileError,
  getProfileLoading,
  getProfileReadOnly,
  profileActions,
  ProfileCard,
  profileReducer
} from 'entities/Profile'
import { classNames } from 'shared/lib/common'
import { useAppDispatch, useDynamicModuleLoader } from 'shared/lib/hooks'
import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './components'
import cls from './ProfilePage.module.scss'
import { getProfileForm } from 'entities/Profile/model/selectors'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

export default memo(function ProfilePage ({ className }: ProfilePageProps) {
  useDynamicModuleLoader(reducers)
  const dispatch = useAppDispatch()

  /* TODO:
    Create an EditableProfileCard feature that contains all the necessary logic and sells
    this logic and data inside the ProfileCard
  */
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadOnly)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

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
    <div className={classNames(cls.profilePage, {}, [className])}>
      <ProfilePageHeader />
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
    </div>
  )
})