import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from '@/app/providers/StoreProvider'
import type { Article } from '@/entities/Article'

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
> (
  'pages/articlesDetailsPage/fetchArticleRecommendations',
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 6
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