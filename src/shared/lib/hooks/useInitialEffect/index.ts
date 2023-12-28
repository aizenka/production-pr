import { DependencyList, useEffect } from 'react'

const useInitialEffect = (cb: () => void, deps?: DependencyList) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      cb()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export default useInitialEffect