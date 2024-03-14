import { useCallback, type ReactNode, useEffect } from 'react'
import { classNames } from '@/shared/lib/common'
import type { ClsMods } from '@/shared/lib/common/classNames/classNames'
import { useAnimationLibs } from '@/shared/lib/components'
import { AnimationProvider } from '@/shared/lib/components'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'
import { RippleLoader } from '../RippleLoader/RippleLoader'
import cls from './Drawer.module.scss'

interface DrawerProps {
  className?: string
  children: ReactNode,
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Drawer = (props: DrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerAsync {...props} />
    </AnimationProvider>
  )
}

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs()

  if (!isLoaded) {
    return <RippleLoader />
  }

  return <DrawerContent {...props} />
}

const PAGE_HEIGHT = window.innerHeight - 100

const DrawerContent = (props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose
  } = props
  const { Spring, Gesture } = useAnimationLibs()
  const [{ y }, api] = Spring.useSpring(() => ({ y: PAGE_HEIGHT }))

  const openDrawer = useCallback((canceled: boolean) => {
    api.start({
      y: 0,
      immediate: false,
      config: canceled ? Spring.config.wobbly : Spring.config.stiff
    })
  }, [api, Spring.config.stiff, Spring.config.wobbly])

  useEffect(() => {
    if (isOpen) {
      openDrawer(true)
    }
  }, [api, isOpen, openDrawer])

  const closeDrawer = useCallback((velocity = 0) => {
    api.start({
      y: PAGE_HEIGHT,
      immediate: false,
      config: {
        ...Spring.config.stiff,
        velocity
      },
      onResolve: onClose
    })
  }, [api, onClose, Spring.config.stiff])

  const bind = Gesture.useDrag((
    {
      last,
      cancel,
      canceled,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my]
    }
  ) => {
    if (my < -70) cancel()

    if (last) {
      if (my > PAGE_HEIGHT + 0.5 || (vy > 0.5 && dy > 0)) {
        closeDrawer()
      } else {
        openDrawer(canceled)
      }
    } else {
      api.start({ y: my, immediate: true })
    }
  },
  {
    from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true
  })


  if (!isOpen) {
    return null
  }

  const display = y.to((py) => (py < PAGE_HEIGHT ? 'block' : 'none'))

  const mods: ClsMods = {
    [cls.opened]: !!isOpen
  }

  return (
    <Portal>
      <div className={classNames(cls.drawer, mods, [className])}>
        <Overlay onClick={() => closeDrawer()} />
        <Spring.a.div
          className={cls.sheet}
          style={{
            display,
            bottom: `calc(-100vh + ${PAGE_HEIGHT - 100}px)`,
            y
          }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  )
}