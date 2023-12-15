import { memo, Suspense, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

const AppRouter = () => {
  // TODO: refactor to normal private routes
  const isAuth = useSelector(getUserAuthData)

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(route => {
      if (route.authOnly && !isAuth) {
        return false
      }

      return true
    })
  }, [isAuth])

  return (
    <Routes>
      {
        routes.map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={(
              <Suspense fallback={<PageLoader />}>
                <div className='cotnentPage'>
                  {element}
                </div>
              </Suspense>
            )}
          />
        ))
      }
    </Routes>
  )
}

export default memo(AppRouter)