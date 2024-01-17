import { HTMLAttributes, ReactNode } from 'react'
import { classNames } from 'shared/lib/common'
import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string,
  children: ReactNode
}

export const Card = (props: CardProps) => {
  const { className, children, ...extraProps } = props

  return (
    <div
      className={classNames(cls.card, {}, [className])}
      {...extraProps}
    >
      {children}
    </div>
  )
}