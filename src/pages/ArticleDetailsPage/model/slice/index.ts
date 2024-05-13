import { combineReducers } from '@reduxjs/toolkit'
import { articleDetailCommentsReducer } from './articleDetailsCommentsSlice'
import {
  articleDetailsRecommendationsReducer
} from './articleDetailsRecommendationsSlice'
import type { Reducer } from '@reduxjs/toolkit'
import type { ArticleDetailsPageSchema } from '../types'

export const articleDetailsPageReducer: Reducer<ArticleDetailsPageSchema> =
combineReducers({
  recommendations: (
    articleDetailsRecommendationsReducer as
    Reducer<ArticleDetailsPageSchema['recommendations']>
  ),
  comments: articleDetailCommentsReducer as Reducer<ArticleDetailsPageSchema['comments']>
})
