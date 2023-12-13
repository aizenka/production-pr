import {
  MouseEvent,
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import { classNames } from 'shared/lib/common'
import { ClsMods } from 'shared/lib/common/classNames/classNames'
import { Portal } from 'shared/ui'
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string,
  children?: ReactNode,
  open?: boolean,
  onClose?: () => void;
  lazy?: boolean
}

const ANIMATION_DELAY = 200

export const Modal = (props: ModalProps) => {
  const {
    open,
    onClose,
    className,
    children,
    lazy
  } = props

  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true)

      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }, [handleClose])

  useEffect(() => {
    if (open) {
      setIsMounted(true)
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      clearTimeout(timerRef.current)
    }
  }, [open, onKeyDown])

  const mods: ClsMods = {
    [cls.opened]: !!open,
    [cls.closing]: isClosing
  }


  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  if (lazy && !isMounted) return null

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <div
          className={cls.overlay}
          onClick={handleClose}
        >
          <div
            className={cls.content}
            onClick={handleContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}