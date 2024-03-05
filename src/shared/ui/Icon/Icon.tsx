import type { FunctionComponent, SVGProps } from 'react'
import { memo } from 'react'
import { classNames } from 'shared/lib/common'
import cls from './Icon.module.scss'

interface IconProps {
  className?: string,
  Svg: FunctionComponent<SVGProps<SVGSVGElement>>
}

export const Icon = memo(({ className, Svg }: IconProps) => {
  return (
    <Svg className={classNames(cls.icon, {}, [className])} />
  )
})