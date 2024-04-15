import { memo } from 'react'
import { classNames } from '@/shared/lib/common'
import cls from './Icon.module.scss'
import type { FunctionComponent, SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string
  Svg: FunctionComponent<SVGProps<SVGSVGElement>>
  inverted?: boolean
}

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
    inverted,
    ...extraProps
  } = props
  return (
    <Svg
      className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])}
      {...extraProps}
    />
  )
})