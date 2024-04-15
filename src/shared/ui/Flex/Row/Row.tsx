import { classNames } from '@/shared/lib/common'
import cls from './Row.module.scss'
import type { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import type { ClsMods } from '@/shared/lib/common/classNames/classNames'

type FlexJustify = 'left' | 'center' | 'right' | 'between' | 'around'
type FlexAlign = 'start' | 'center' | 'end' | 'stretch'
type FlexGap = 4| 8 | 16 | 24 | 32

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

interface RowProps extends DivProps {
  className?: string,
  children: ReactNode
  align?: FlexJustify
  vAlign?: FlexAlign,
  wrap?: boolean,
  reverse?: boolean,
  stretch?: boolean,
  gap?: FlexGap,
  style?: CSSProperties
}

export const Row = (props: RowProps) => {
  const {
    className,
    children,
    align = 'left',
    vAlign,
    wrap,
    reverse,
    stretch,
    gap,
    style = {},
    ...extraProps
  } = props

  const getStyle = (): CSSProperties => {
    const _style = { ...style }
    if (gap && !style?.gap) _style.gap = gap
    return _style
  }

  const mods: ClsMods = {
    [cls[align]]: !!align,
    [cls['v_' + vAlign]]: !!vAlign,
    [cls.wrap]: !!wrap,
    [cls.reverse]: !!reverse,
    [cls.stretch]: !!stretch
  }

  return (
    <div
      className={classNames(cls.row, mods, [className])}
      style={getStyle()}
      {...extraProps}
    >
      {children}
    </div>
  )
}