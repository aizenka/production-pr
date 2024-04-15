import { memo } from 'react'
import { classNames } from '@/shared/lib/common'
import cls from './Button.module.scss'
import type { ClsAdditional } from '@/shared/lib/common/classNames/classNames'
import type { ButtonHTMLAttributes, ReactNode } from 'react'


type ButtonVariant =
  'text' |
  'textInverted' |
  'outlined' |
  'outlinedDanger' |
  'flat' |
  'flatInverted'

type ButtonSize = 'm' | 'l' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  variant?: ButtonVariant,
  size?: ButtonSize,
  square?: boolean,
  stretch?: boolean
  children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = 'text',
    size = 'm',
    square,
    disabled,
    stretch,
    ...extraProps
  } = props

  const additionalClasses: ClsAdditional= [
    className,
    cls[variant],
    cls[size]
  ]

  return (
    <button
      type='button'
      data-testid='button'
      className={classNames(
        cls.button,
        {
          [cls.square]: !!square,
          [cls.disabled]: !!disabled,
          [cls.stretch]: !!stretch
        },
        additionalClasses
      )}
      disabled={disabled}
      {...extraProps}
    >
      {children}
    </button>
  )
})