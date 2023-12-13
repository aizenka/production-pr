import { memo, useEffect } from 'react'
import {
  fetchProfileData,
  ProfileCard,
  profileReducer
} from 'entities/Profile'
import { classNames } from 'shared/lib/common'
import { useAppDispatch, useDynamicModuleLoader } from 'shared/lib/hooks'
import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader'
// import cls from './ProfilePage.module.scss'

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

export default memo(function ProfilePage ({ className }: ProfilePageProps) {
  useDynamicModuleLoader(reducers)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <div className={classNames('', {}, [className])}>
      <ProfileCard />
    </div>
  )
})