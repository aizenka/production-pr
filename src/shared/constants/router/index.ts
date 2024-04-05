export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ADMIN_PANEL = 'adminPanel',
  ARTICLE_DETAILS = 'articleDetails',
  ARTICLE_CREATE = 'articleCreate',
  ARTICLE_EDIT = 'articleEdit',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'notFound'
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteAdminPanel = () => '/admin'
export const getRouteArticleDetails = (id: string) => `/articles/${id}`
export const getRouteArticleCreate = () => '/articles/new'
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`
export const getRouteForbidden = () => '/forbidden'