import { ArticleListView, ArticleSortField, ArticleType } from 'entities/Article'
import { StateSchema } from 'shared/config/store'

export const getArticlesPageLoading = (state: StateSchema) => {
  return state.articlesPage?.isLoading || false
}

export const getArticlesPageError = (state: StateSchema) => {
  return state.articlesPage?.error
}

export const getArticlesPageListView = (state:StateSchema) => {
  return state.articlesPage?.view || ArticleListView.GRID
}

export const getArticlesPageNum= (state:StateSchema) => {
  return state.articlesPage?.page || 1
}

export const getArticlesPageListLimit = (state:StateSchema) => {
  return state.articlesPage?.limit || 8
}

export const getArticlesPageSort = (state:StateSchema) => {
  return state.articlesPage?.sort ?? ArticleSortField.CREATED_AT
}

export const getArticlesPageOrder = (state:StateSchema) => {
  return state.articlesPage?.order ?? 'asc'
}

export const getArticlesPageSearch = (state:StateSchema) => {
  return state.articlesPage?.search ?? ''
}

export const getArticlesPageSelectedType = (state:StateSchema) => {
  return state.articlesPage?.selectedType ?? ArticleType.ALL
}

export const getArticlesPageListHasMore = (state:StateSchema) => {
  return state.articlesPage?.hasMore
}

export const getArticlesPageInited = (state:StateSchema) => {
  return state.articlesPage?._inited
}