import { HTMLAttributes, ReactNode } from 'react'
import { classNames } from 'shared/lib/common'
import cls from './Card.module.scss'

export enum CardVariant {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string,
  variant?: CardVariant
  children: ReactNode
}

export const Card = (props: CardProps) => {
  const {
    className,
    children,
    variant = CardVariant.NORMAL,
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