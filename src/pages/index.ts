import { lazy } from 'react'

export const MainPage = lazy(() => import('./MainPage/ui/MainPage'))

export const AboutPage = lazy(() => import('./AboutPage/ui/AboutPage'))

export const ProfilePage = lazy(() => import('./ProfilePage/ui/ProfilePage'))

export const ArticlesPage = lazy(() => import('./ArticlesPage/ui/ArticlesPage'))

// eslint-disable-next-line max-len
export const ArticleDetailsPage = lazy(() => import('./ArticleDetailsPage/ui/ArticleDetailsPage'))

export const ArticleEditPage = lazy(() => import('./ArticleEditPage/ui/ArticleEditPage'))

export { default as NotFoundPage } from './NotFoundPage/ui/NotFoundPage'