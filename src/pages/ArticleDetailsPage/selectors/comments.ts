import type { StateSchema } from '@/app/providers/StoreProvider'

export const getArticleCommentsLoading = (state: StateSchema) => {
  return state.articleDetailsPage?.comments?.isLoading
}

export const getArticleCommentsError = (state: StateSchema) => {
  return state.articleDetailsPage?.comments?.error
}