import { memo } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from '@/shared/lib/common'
import cls from './AppLink.module.scss'
import type { LinkProps } from 'react-router-dom'
import type { ReactNode } from 'react'

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