import type { MutableRefObject } from 'react'
import { useEffect } from 'react'

export interface useInfiniteScrollOptions {
  cb?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

const useInfiniteScroll = (options: useInfiniteScrollOptions) => {
  const { cb, triggerRef, wrapperRef } = options

  useEffect(() => {
    let observer: IntersectionObserver | null = null
    const wrapperElement = wrapperRef.current
    const triggerElement = triggerRef.current

    if (cb) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0
      }

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          cb()
        }
      }, options)


      observer.observe(triggerElement)
    }

    return () => {
      if (observer && triggerElement) {
        observer.unobserve(triggerElement)
      }
    }
  }, [cb, triggerRef, wrapperRef])
}

export default useInfiniteScroll