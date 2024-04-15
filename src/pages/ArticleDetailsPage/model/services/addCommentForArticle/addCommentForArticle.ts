import { createAsyncThunk } from '@reduxjs/toolkit'
import { getArticleDetailsId } from '@/entities/Article'
import { getUserAuthData } from '@/entities/User'
import {
  fetchCommentsByArticleId
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId'
import type { Comment } from '@/entities/Comment'
import type { ThunkConfig } from '@/app/providers/StoreProvider'

export const addCommentForArticle =
  createAsyncThunk<Comment, string, ThunkConfig<string>>
  (
    'pages/articleDetailsPage/addCommentForArticle',
    async (text, thunkApi) => {
      const { dispatch, rejectWithValue, getState, extra } = thunkApi

      try {
        const userData = getUserAuthData(getState())
        const articleId = getArticleDetailsId(getState())

        if (!userData || !articleId) {
          return rejectWithValue('error')
        }

        const response = await extra.api.post<Comment>('/comments', {
          articleId,
          userId: userData.id,
          text
        })

        if (!response.data) {
          throw new Error()
        }

        dispatch(fetchCommentsByArticleId(articleId))

        return response.data
      } catch (e) {
        return rejectWithValue('error')
      }
    }
  )