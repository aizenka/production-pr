import {
  createEntityAdapter,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'
import { Comment } from 'entities/Comment'
import { StateSchema } from 'shared/config/store'
import { fetchCommentsByArticleId } from '../services'
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'

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
      // fetchProfileData
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
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
)

export const {
  actions: articleDetailCommentsActions,
  reducer: articleDetailCommentsReducer
} = articleDetailsCommentSlice