import type { StateSchema } from 'shared/config/store'

export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data
export const getArticleDetailsId = (state: StateSchema) => state.articleDetails?.data?.id
export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error
export const getArticleDetailsLoading = (state: StateSchema) => {
  return state.articleDetails?.isLoading
}