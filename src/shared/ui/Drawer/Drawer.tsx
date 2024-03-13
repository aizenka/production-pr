import type { ReactNode } from 'react'
import { classNames } from 'shared/lib/common'
import type { ClsMods } from 'shared/lib/common/classNames/classNames'
import { useModal } from 'shared/lib/hooks'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'
import cls from './Drawer.module.scss'

interface DrawerProps {
  className?: string
  children: ReactNode,
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Drawer = (props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy
  } = props
  const { isClosing, isMounted, close } = useModal({
    onClose,
    isOpen,
    animationDelay: 200
  })

  const mods: ClsMods = {
    [cls.opened]: !!isOpen,
    [cls.closing]: isClosing
  }

  if (lazy && !isMounted) return null

  return (
    <Portal>
      <div className={classNames(cls.drawer, mods, [className])}>
        <Overlay onClick={close} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  )
}