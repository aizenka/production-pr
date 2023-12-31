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

export const ProfilePage = lazy(() => new Promise(resolve => {
  // @ts-expect-error test suspense
  setTimeout(() => resolve(import('./ProfilePage/ui/ProfilePage')), 1500)
}))

export const ArticlesPage = lazy(() => new Promise(resolve => {
  // @ts-expect-error test suspense
  setTimeout(() => resolve(import('./ArticlesPage/ui/ArticlesPage')), 1500)
}))

export const ArticleDetailsPage = lazy(() => new Promise(resolve => {
  // @ts-expect-error test suspense
  setTimeout(() => resolve(import('./ArticleDetailsPage/ui/ArticleDetailsPage')), 1500)
}))

export { default as NotFoundPage } from './NotFoundPage/ui/NotFoundPage'