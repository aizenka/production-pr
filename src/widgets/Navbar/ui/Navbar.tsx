import { AppLink } from 'shared/ui'
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib'
import { ThemeSwitcher } from '../../ThemeSwitcher'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink to='/' theme={AppLinkVariant.SECONDARY}>
          Main page
        </AppLink>
        <AppLink to='/about' theme={AppLinkVariant.SECONDARY}>
          About page
        </AppLink>
      </div>
    </div>
  )
}