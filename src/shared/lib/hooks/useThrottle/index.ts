import type { MutableRefObject } from 'react'
import { useCallback, useEffect, useRef } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */
const useThrottle = (cb: (...args: any[]) => void, delay: number) => {
  const throttleRef = useRef(false)
  const timeoutRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

  useEffect(() => () => {
    clearTimeout(timeoutRef.current)
  }, [])

  const throttledCallback =  useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      cb(...args)
      throttleRef.current = true

      timeoutRef.current = setTimeout(() => {
        throttleRef.current = false
      }, delay)
    }
  }, [cb, delay])

  return throttledCallback
}

export default useThrottle