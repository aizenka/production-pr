import type {
  PayloadAction
} from '@reduxjs/toolkit'
import {
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import type { Comment } from 'entities/Comment'
import type { StateSchema } from 'shared/config/store'
import { fetchCommentsByArticleId } from '../services'
import type { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id
})


const articleDetailsCommentSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (
        state,
        { payload }: PayloadAction<Comment[]>
      ) => {
        state.isLoading = false
        commentsAdapter.setAll(state, payload)
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, { payload }) => {
        state.error = payload
        state.isLoading = false
      })
  }
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
)

export const {
  actions: articleDetailCommentsActions,
  reducer: articleDetailCommentsReducer
} = articleDetailsCommentSlice