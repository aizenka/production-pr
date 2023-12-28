import { StateSchema } from 'shared/config/store'

export const getArticleCommentsLoading = (state: StateSchema) => {
  return state.articleDetailsComments?.isLoading
}

export const getArticleCommentsError = (state: StateSchema) => {
  return state.articleDetailsComments?.error
}