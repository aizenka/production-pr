import { lazy } from 'react'

// export const MainPage = lazy(() => import('./MainPage/ui/MainPage'))
// export const AboutPage = lazy(() => import('./AboutPage/ui/AboutPage'))

export const MainPage = lazy(() => new Promise(resolve => {
  // @ts-expect-error test suspense
  setTimeout(() => resolve(import('./MainPage/ui/MainPage')), 1500)
}))

export const AboutPage = lazy(() => new Promise(resolve => {
  // @ts-expect-error test suspense
  setTimeout(() => resolve(import('./AboutPage/ui/AboutPage')), 1500)
}))

export { NotFoundPage } from './NotFoundPage/ui/NotFoundPage'