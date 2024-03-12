import { useEffect, useState } from 'react'

const tabletWidth = 768

const useDetectMobileScreen = () => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  const isMobile = width <= tabletWidth

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile
}

export default useDetectMobileScreen