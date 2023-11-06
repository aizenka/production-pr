import { lazy } from 'react'

// for suspense test, delete after
export const MainPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import('./MainPage')), 1500)
}))
export const AboutPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import('./AboutPage')), 1500)
}));