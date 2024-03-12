import type { ReactNode } from 'react'
import { classNames } from 'shared/lib/common'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'
import cls from './Drawer.module.scss'

interface DrawerProps {
  className?: string
  children: ReactNode,
  isOpen?: boolean
  onClose?: () => void
}

export const Drawer = (props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose
  } = props

  return (
    <Portal>
      <div className={classNames(cls.drawer, { [cls.opened]: isOpen }, [className])}>
        <Overlay onClick={onClose} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  )
}