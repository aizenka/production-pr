import { useState, useRef, useCallback, useEffect } from 'react'
import type { MutableRefObject } from 'react'

interface UseModalOptions {
  onClose?: () => void
  isOpen?: boolean
  animationDelay: number
}

const useModal = (options: UseModalOptions) => {
  const { onClose, animationDelay, isOpen } = options

  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true)

      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, animationDelay)
    }
  }, [onClose, animationDelay])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close()
    }
  }, [close])

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      clearTimeout(timerRef.current)
    }
  }, [isOpen, onKeyDown])


  return {
    isClosing,
    isMounted,
    close
  }
}

export default useModal