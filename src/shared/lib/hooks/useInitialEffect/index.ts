import type { DependencyList } from 'react'
import { useEffect } from 'react'

const useInitialEffect = (cb: () => void, deps?: DependencyList) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      cb()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export default useInitialEffect