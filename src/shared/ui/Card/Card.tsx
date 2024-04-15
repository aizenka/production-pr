import { classNames } from '@/shared/lib/common'
import cls from './Card.module.scss'
import type { HTMLAttributes, ReactNode } from 'react'

type CardVariant = 'normal' | 'outlined'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string,
  variant?: CardVariant
  children: ReactNode
}

export const Card = (props: CardProps) => {
  const {
    className,
    children,
    variant = 'normal',
    ...extraProps
  } = props

  return (
    <div
      className={classNames(cls.card, {}, [className, cls[variant]])}
      {...extraProps}
    >
      {children}
    </div>
  )
}