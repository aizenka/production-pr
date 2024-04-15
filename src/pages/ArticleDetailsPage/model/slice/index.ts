import { combineReducers } from '@reduxjs/toolkit'
import { articleDetailCommentsReducer } from './articleDetailsCommentsSlice'
import { articleDetailsRecommendationsReducer } from './articleDetailsRecomendationsSlice'
import type { ArticleDetailsPageSchema } from '../types'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsRecommendationsReducer,
  comments: articleDetailCommentsReducer
})