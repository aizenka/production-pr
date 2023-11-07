import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Button.module.scss';

export enum ButtonVariant {
  TEXT = 'text'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  theme?: ButtonVariant
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonVariant.TEXT,
    ...extraProps
  } = props

  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...extraProps}
    >
      {children}
    </button>
  );
};