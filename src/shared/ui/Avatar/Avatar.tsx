import { memo, useMemo } from 'react'
import { classNames } from '@/shared/lib/common'
import UserIcon from '@/shared/assets/icons/icon-user-avatar-filled.svg'
import { LazyImage } from '../LazyImage/LazyImage'
import { Icon } from '../Icon/Icon'
import { Skeleton } from '../Skeleton/Skeleton'
import cls from './Avatar.module.scss'
import type { ClsMods } from '@/shared/lib/common/classNames/classNames'
import type { CSSProperties } from 'react'

interface AvatarProps {
  className?: string,
  src: string | undefined,
  alt: string,
  size?: number,
  fallbackInverted?: boolean
}

export const Avatar = memo((props: AvatarProps) => {
  const { className, src, size = 80, alt, fallbackInverted } = props

  const mods:ClsMods = {

  }

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size
    }
  }, [size])

  return (
    <LazyImage
      className={classNames(cls.avatar, mods, [className])}
      style={styles}
      src={src}
      alt={alt}
      fallback={
        <Skeleton
          width={size}
          height={size}
          borderRadius='50%'
        />
      }
      errorFallback={
        <Icon
          Svg={UserIcon}
          width={size}
          height={size}
          inverted={fallbackInverted}
        />
      }
    />
  )
})