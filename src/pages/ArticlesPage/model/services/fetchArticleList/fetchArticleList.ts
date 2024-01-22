import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'shared/config/store'
import { Article } from 'entities/Article'
import { getArticlesPageListLimit } from '../../selectors/articlesPageSelectors'

interface fetchArticleListProps {
  page?: number
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  fetchArticleListProps,
  ThunkConfig<string>
> (
  'pages/articlesPage/fetchArticleList',
  async (args, { getState, extra, rejectWithValue }) => {
    const { page = 1 } = args

    try {
      const limit = getArticlesPageListLimit(getState())

      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit
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