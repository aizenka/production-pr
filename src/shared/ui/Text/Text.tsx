import { memo } from 'react'
import { classNames } from '@/shared/lib/common'
import cls from './Text.module.scss'
import type { ClsMods } from '@/shared/lib/common/classNames/classNames'

export enum TextSize {
  S = 's',
  M = 'm',
  L = 'l'
}

export enum TextType {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1'
}

interface TextProps {
  className?: string,
  title?: string,
  text?: string,
  type?: TextType,
  align?: TextAlign,
  size?: TextSize,

  'data-testid'?: string
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    type = TextType.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text'
  } = props

  const HeaderTag = mapSizeToHeaderTag[size]

  const mods: ClsMods = {
    [cls[type]]: !!type,
    [cls[align]]: !!align,
    [cls[size]]: !!size
  }

  return (
    <div className={classNames(cls.text, mods, [className])}
    >
      {
        title && (
          <HeaderTag
            className={cls.title}
            data-testid={`${dataTestId}.Header`}
          >
            {title}
          </HeaderTag>
        )
      }
      {
        text && (
          <p
            className={cls.text}
            data-testid={`${dataTestId}.Paragraph`}
          >
            {text}
          </p>
        )
      }
    </div>
  )
})