import { MutableRefObject, ReactNode, useRef } from 'react'
import { classNames } from 'shared/lib/common'
import { useInfiniteScroll } from 'shared/lib/hooks'
import cls from './PageWrapper.module.scss'

interface PageWrapperProps {
  className?: string,
  children: ReactNode,
  onScrollEnd?: () => void
}

// move to widgets ?
export const PageWrapper = (props: PageWrapperProps) => {
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

  useInfiniteScroll({
    cb: onScrollEnd,
    wrapperRef,
    triggerRef
  })

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.pageWrapper, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  )
}