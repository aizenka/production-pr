import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { MainPage, AboutPage } from 'pages'

const AppRouter = () => {
  return (
     <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {
            Object.values(routeConfig).map(({ element, path }) => (
              <Route
                key={path}
                path={path}
                element={element}
              />
            ))
          }
        </Routes>
      </Suspense>
  );
};

export default AppRouter;