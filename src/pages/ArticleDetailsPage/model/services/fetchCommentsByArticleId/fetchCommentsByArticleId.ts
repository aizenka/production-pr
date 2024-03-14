import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from '@/shared/config/store'
import type { Comment } from '@/entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
> (
  'pages/articleDetails/fetchCommentsByArticleId',
  async (articleId, { extra, rejectWithValue }) => {
    try {
      if (!articleId) {
        return rejectWithValue('error')
      }

      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user'
        }
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)