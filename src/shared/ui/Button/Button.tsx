import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib'
import cls from './Button.module.scss'

export enum ButtonVariant {
  TEXT = 'text',
  TEXT_INVERTED = 'textInverted',
  OUTLINED = 'outlined',
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
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant = ButtonVariant.TEXT,
    size = ButtonSize.M,
    square,
    disabled,
    ...extraProps
  } = props

  const additionalClasses: string[] = [
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
          [cls.disabled]: !!disabled
        },
        additionalClasses
      )}
      disabled={disabled}
      {...extraProps}
    >
      {children}
    </button>
  )
}