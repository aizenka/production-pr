import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from '@/app/providers/StoreProvider'
import type { Article } from '../../types'

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>> (
  'entities/article/fetchArticleById',
  async (articleId, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`, {
        params: {
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