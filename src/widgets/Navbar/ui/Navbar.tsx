import { AppLink } from 'shared/ui'
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to='/' theme={AppLinkVariant.SECONDARY}>
          {t('mainPage')}
        </AppLink>
        <AppLink to='/about' theme={AppLinkVariant.SECONDARY}>
          {t('aboutPage')}
        </AppLink>
      </div>
    </div>
  )
}