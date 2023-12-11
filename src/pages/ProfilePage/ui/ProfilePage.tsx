import { profileReducer } from 'entities/Profile'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/common'
import { useDynamicModuleLoader } from 'shared/lib/hooks'
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
  const { t } = useTranslation()

  return (
    <div className={classNames('', {}, [className])}>
      {t('profilePage')}
    </div>
  )
})