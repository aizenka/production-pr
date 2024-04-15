import { memo, useLayoutEffect, useState } from 'react'
import type { ImgHTMLAttributes, ReactNode } from 'react'

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string,
  src?: string,
  alt?: string,
  fallback?: ReactNode
  errorFallback?: ReactNode
}

// TODO: add story
export const LazyImage = memo((props: LazyImageProps) => {
  const {
    className,
    src,
    alt = 'image',
    fallback,
    errorFallback,
    ...extraProps
  } = props
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useLayoutEffect(() => {
    const img = new Image()
    img.src = src ?? ''

    img.onload = () => {
      setIsLoading(false)
    }

    img.onerror = () => {
      setHasError(true)
      setIsLoading(false)
    }

  }, [src])

  if (isLoading && fallback) {
    return fallback
  }

  if (hasError && errorFallback) {
    return errorFallback
  }


  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...extraProps}
    />
  )
})