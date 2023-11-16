import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib'
import cls from './Button.module.scss'

// TODO: add variant flat/outlined
export enum ButtonVariant {
  TEXT = 'text',
  OUTLINED = 'outlined'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  variant?: ButtonVariant
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant = ButtonVariant.TEXT,
    ...extraProps
  } = props

  return (
    <button
      type='button'
      data-testid='button'
      className={classNames(cls.button, {}, [className, cls[variant]])}
      {...extraProps}
    >
      {children}
    </button>
  )
}