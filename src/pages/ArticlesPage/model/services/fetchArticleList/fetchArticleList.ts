import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'shared/config/store'
import { Article } from 'entities/Article'

export const fetchArticleList = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
> (
  'pages/articlesPage/fetchArticleList',
  async (_, { extra, rejectWithValue }) => {
    try {

      const response = await extra.api.get<Article[]>('/articles', {
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