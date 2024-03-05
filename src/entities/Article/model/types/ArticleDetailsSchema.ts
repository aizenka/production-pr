import type { Article } from './Article'

export interface ArticleDetailsSchema {
  data?: Article
  isLoading: boolean
  error?: string
}