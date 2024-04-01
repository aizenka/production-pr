import type { ReactNode } from 'react'
import { memo } from 'react'
import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { classNames } from '@/shared/lib/common'
import cls from './AppLink.module.scss'

type AppLinkVariant = 'primary' | 'secondary'

interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: AppLinkVariant,
  children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    theme = 'primary',
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
})