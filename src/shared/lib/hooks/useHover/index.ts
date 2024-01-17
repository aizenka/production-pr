import { useCallback, useMemo, useState } from 'react'

interface UseHoverBind {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

type UseHoverResult = [boolean, UseHoverBind]

const useHover = (): UseHoverResult => {
  const [isHover, setIsHover] = useState(false)

  const onMouseEnter = useCallback(() => {
    setIsHover(true)
  }, [])

  const onMouseLeave = useCallback(() => {
    setIsHover(false)
  }, [])

  return useMemo(() => {
    return [
      isHover,
      {
        onMouseEnter,
        onMouseLeave
      }
    ]
  }, [isHover, onMouseEnter, onMouseLeave])
}

export default useHover