import { CSSProperties, memo } from 'react'
import { classNames } from 'shared/lib/common'
import cls from './Skeleton.module.scss'

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  borderRadius?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className,
    height,
    width,
    borderRadius
  } = props

  const styles:CSSProperties = {
    width,
    height,
    borderRadius
  }

  return (
    <div
      className={classNames(cls.skeleton, {}, [className])}
      style={styles}
    />
  )
})