import { MutableRefObject, useEffect } from 'react'

export interface useInfiniteScrollOptions {
  cb?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

const useInfiniteScroll = (options: useInfiniteScrollOptions) => {
  const { cb, triggerRef, wrapperRef } = options

  useEffect(() => {
    let observer: IntersectionObserver | null = null

    if (cb) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '0px',
        threshold: 1.0
      }

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          cb()
        }
      }, options)


      observer.observe(triggerRef.current)
    }

    return () => {
      if (observer) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerRef.current)
      }
    }
  }, [cb, triggerRef, wrapperRef])
}

export default useInfiniteScroll