import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/common'
import cls from './AppLink.module.scss'

export enum AppLinkVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: AppLinkVariant
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    theme = AppLinkVariant.PRIMARY,
    children,
    ...extraProps
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      {...extraProps}
    >
      {children}
    </Link>
  )
}