import { classNames } from '@/shared/lib/common'
import { useModal } from '@/shared/lib/hooks'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'
import cls from './Modal.module.scss'
import type { ClsMods } from '@/shared/lib/common/classNames/classNames'
import type { ReactNode } from 'react'

interface ModalProps {
  className?: string,
  children?: ReactNode,
  open?: boolean,
  onClose?: () => void;
  lazy?: boolean
}

export const Modal = (props: ModalProps) => {
  const {
    open,
    onClose,
    className,
    children,
    lazy
  } = props
  const { isClosing, isMounted, close } = useModal({
    onClose,
    isOpen: open,
    animationDelay: 200
  })

  const mods: ClsMods = {
    [cls.opened]: !!open,
    [cls.closing]: isClosing
  }

  if (lazy && !isMounted) return null

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <Overlay onClick={close} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  )
}