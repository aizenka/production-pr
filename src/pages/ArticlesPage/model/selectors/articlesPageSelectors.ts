import { ArticleListView } from 'entities/Article'
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

export const getArticlesPageListHasMore =(state:StateSchema) => {
  return state.articlesPage?.hasMore
}