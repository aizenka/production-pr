import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { memo } from 'react'
import { classNames } from '@/shared/lib/common'
import type { ClsAdditional } from '@/shared/lib/common/classNames/classNames'
import cls from './Button.module.scss'


//TODO: use union type
export enum ButtonVariant {
  TEXT = 'text',
  TEXT_INVERTED = 'textInverted',
  OUTLINED = 'outlined',
  OUTLINED_DANGER = 'outlinedDanger',
  FLAT = 'flat',
  FLAT_INVERTED = 'flatInverted'
}

export enum ButtonSize {
  M = 'm',
  L = 'l',
  XL = 'xl'
}

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
    variant = ButtonVariant.TEXT,
    size = ButtonSize.M,
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