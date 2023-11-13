import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
  return (
    <Routes>
      {
        Object.values(routeConfig).map(({ element, path }) => (
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

export default AppRouter