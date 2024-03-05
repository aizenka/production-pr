import type { StateSchema } from 'shared/config/store'

export const getArticleDetailsRecommendationsLoading = (state: StateSchema) => {
  return state.articleDetailsPage?.recommendations?.isLoading
}

export const getArticleDetailsRecommendationsError = (state: StateSchema) => {
  return state.articleDetailsPage?.recommendations?.error
}