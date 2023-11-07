import { AppLink } from 'shared/ui'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to='/' theme={AppLinkTheme.SECONDARY}>
          Main page
        </AppLink>
        <AppLink to='/about' theme={AppLinkTheme.SECONDARY}>
          About page
        </AppLink>
      </div>
    </div>
  )
}