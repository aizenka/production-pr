import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { StateSchema } from 'shared/config/store'
import { classNames } from 'shared/lib/common'
import {
  useAppDispatch,
  useInfiniteScroll,
  useInitialEffect,
  useThrottle
} from 'shared/lib/hooks'
import { getScrollByPath } from '../model/selectors/scrollSelectors'
import { uiActions } from '../model/slice/UISlice'
import cls from './PageWrapper.module.scss'

interface PageWrapperProps {
  className?: string,
  children: ReactNode,
  onScrollEnd?: () => void
}

export const PageWrapper = (props: PageWrapperProps) => {
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector(
    (state: StateSchema) => getScrollByPath(state, pathname)
  )

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  }, [])

  useInfiniteScroll({
    cb: onScrollEnd,
    wrapperRef,
    triggerRef
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(uiActions.setScrollPosition({
      path: pathname,
      position: e.currentTarget.scrollTop
    }))
  }, 500)

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.pageWrapper, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      { onScrollEnd ? <div ref={triggerRef} className={cls.triggerDiv} /> : null }
    </section>
  )
}