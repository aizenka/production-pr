import { combineReducers } from '@reduxjs/toolkit'
import type { ArticleDetailsPageSchema } from '../types'
import { articleDetailCommentsReducer } from './articleDetailsCommentsSlice'
import { articleDetailsRecommendationsReducer } from './articleDetailsRecomendationsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsRecommendationsReducer,
  comments: articleDetailCommentsReducer
})