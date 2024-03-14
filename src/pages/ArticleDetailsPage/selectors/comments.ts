import type { StateSchema } from '@/shared/config/store'

export const getArticleCommentsLoading = (state: StateSchema) => {
  return state.articleDetailsPage?.comments?.isLoading
}

export const getArticleCommentsError = (state: StateSchema) => {
  return state.articleDetailsPage?.comments?.error
}