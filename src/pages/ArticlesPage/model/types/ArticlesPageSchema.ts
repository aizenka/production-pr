import type { EntityState } from '@reduxjs/toolkit'
import type {
  Article,
  ArticleListView,
  ArticleSortField,
  ArticleType
} from '@/entities/Article'
import type { SortOrder } from '@/shared/types/sort'

export interface ArticlesPageSchema extends EntityState<Article, string> {
  isLoading?: boolean
  error?: string

  //pagination
  page: number
  limit?: number
  hasMore: boolean

  // filters
  view: ArticleListView
  order: SortOrder
  sort: ArticleSortField
  search: string,
  selectedType: ArticleType

  _inited: boolean
}