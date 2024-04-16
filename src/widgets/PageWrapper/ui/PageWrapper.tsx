import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { classNames } from '@/shared/lib/common'
import {
  useAppDispatch,
  useInfiniteScroll,
  useInitialEffect,
  useThrottle
} from '@/shared/lib/hooks'
import { getScrollByPath } from '../model/selectors/scrollSelectors'
import { uiActions } from '../model/slice/UISlice'
import cls from './PageWrapper.module.scss'
import type { TestProps } from '@/shared/types/tests'
import type { StateSchema } from '@/app/providers/StoreProvider'
import type { MutableRefObject, ReactNode, UIEvent } from 'react'

interface PageWrapperProps extends TestProps {
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
    <main
      ref={wrapperRef}
      className={classNames(cls.pageWrapper, {}, [className])}
      onScroll={onScroll}
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}
      { onScrollEnd ? <div ref={triggerRef} className={cls.triggerDiv} /> : null }
    </main>
  )
}