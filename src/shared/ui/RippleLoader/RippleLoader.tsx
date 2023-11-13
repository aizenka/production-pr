import { classNames } from 'shared/lib'
import cls from './RippleLoader.module.scss'

interface RippleLoaderProps {
  className?: string
}

export const RippleLoader = ({ className }: RippleLoaderProps) => {
  return (
    <div className={classNames(cls.rippleLoader, {}, [className])}>
      <div />
      <div />
    </div>
  )
}