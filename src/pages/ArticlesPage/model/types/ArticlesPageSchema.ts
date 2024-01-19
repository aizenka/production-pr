import { EntityState } from '@reduxjs/toolkit'
import { Article, ArticleListView } from 'entities/Article'

export interface ArticlesPageSchema extends EntityState<Article> {
  view: ArticleListView
  isLoading?: boolean
  error?: string
}