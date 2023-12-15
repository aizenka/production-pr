import { memo } from 'react'
import { classNames } from 'shared/lib/common'
import { ClsMods } from 'shared/lib/common/classNames/classNames'
import cls from './Text.module.scss'

export enum TextType {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

interface TextProps {
  className?: string,
  title?: string,
  text?: string,
  type?: TextType,
  align?: TextAlign
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    type = TextType.PRIMARY,
    align = TextAlign.LEFT
  } = props

  const mods: ClsMods = {
    [cls[type]]: !!type,
    [cls[align]]: !!align
  }

  return (
    <div className={classNames(cls.text, mods, [className])}
    >
      {
        title && (
          <p className={cls.title}>{title}</p>
        )
      }
      {
        text && (
          <p className={cls.text}>{text}</p>
        )
      }
    </div>
  )
})