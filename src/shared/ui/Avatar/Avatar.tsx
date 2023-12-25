import { CSSProperties, memo, useMemo } from 'react'
import { classNames } from 'shared/lib/common'
import { ClsMods } from 'shared/lib/common/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string,
  src: string | undefined,
  alt: string,
  size?: number
}

export const Avatar = memo((props: AvatarProps) => {
  const { className, src, size, alt } = props

  const mods:ClsMods = {

  }

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 80,
      height: size || 80
    }
  }, [size])

  return (
    <img
      className={classNames(cls.avatar, mods, [className])}
      style={styles}
      src={src}
      alt={alt}
    />
  )
})