import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { fetchArticleById } from '../services'
import type { Article, ArticleDetailsSchema } from '../types'

const initialState: ArticleDetailsSchema = {
  data: undefined,
  isLoading: false,
  error: undefined
}

export const ArticleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleById.fulfilled, (
        state,
        { payload }: PayloadAction<Article>
      ) => {
        state.isLoading = false
        state.data = payload
      })
      .addCase(fetchArticleById.rejected, (state, { payload }) => {
        state.error = payload
        state.isLoading = false
      })
  }
})

export const {
  actions: articleDetailsActions,
  reducer: articleDetailsReducer
} = ArticleDetailsSlice