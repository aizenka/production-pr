import type { FunctionComponent, SVGProps } from 'react'
import { memo } from 'react'
import { classNames } from 'shared/lib/common'
import cls from './Icon.module.scss'

interface IconProps {
  className?: string
  Svg: FunctionComponent<SVGProps<SVGSVGElement>>
  inverted?: boolean
}

export const Icon = memo(({ className, Svg, inverted }: IconProps) => {
  return (
    <Svg className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])} />
  )
})