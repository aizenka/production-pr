import { useCallback, useRef } from 'react'
import type { MutableRefObject } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */
const useDebounce = (cb: (...args: any[]) => void, delay: number) => {
  const timeoutRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

  return useCallback((...args: any[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => cb(...args), delay)
  }, [cb, delay])
}

export default useDebounce