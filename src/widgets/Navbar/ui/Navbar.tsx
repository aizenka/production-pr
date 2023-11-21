import { classNames } from 'shared/lib'
import cls from './Navbar.module.scss'
// import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  // const { t } = useTranslation()

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        /
      </div>
    </div>
  )
}