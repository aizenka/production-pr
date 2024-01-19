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