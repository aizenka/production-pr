import { memo } from 'react'
import { classNames } from 'shared/lib/common'
import cls from './Icon.module.scss'

interface IconProps {
  className?: string,
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo(({ className, Svg }: IconProps) => {
  return (
    <Svg className={classNames(cls.icon, {}, [className])} />
  )
})