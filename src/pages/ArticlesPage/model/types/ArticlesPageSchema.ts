import { EntityState } from '@reduxjs/toolkit'
import { Article, ArticleListView } from 'entities/Article'

export interface ArticlesPageSchema extends EntityState<Article> {
  view: ArticleListView,
  page: number
  limit?: number
  hasMore: boolean
  isLoading?: boolean
  error?: string,

  _inited: boolean
}