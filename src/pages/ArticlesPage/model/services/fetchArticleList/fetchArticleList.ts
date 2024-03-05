import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'shared/config/store'
import type { Article } from 'entities/Article'
import { ArticleType } from 'entities/Article'
import { addQueryParams } from 'shared/lib/helpers'
import {
  getArticlesPageListLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSelectedType,
  getArticlesPageSort
} from '../../selectors/articlesPageSelectors'

interface fetchArticleListProps {
  replace?: boolean
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  fetchArticleListProps,
  ThunkConfig<string>
> (
  'pages/articlesPage/fetchArticleList',
  async (_, { getState, extra, rejectWithValue }) => {
    try {
      const page = getArticlesPageNum(getState())
      const limit = getArticlesPageListLimit(getState())
      const sort = getArticlesPageSort(getState())
      const order = getArticlesPageOrder(getState())
      const search = getArticlesPageSearch(getState())
      const selectedType = getArticlesPageSelectedType(getState())

      addQueryParams({ sort, order, search, selectedType })

      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
          q: search,
          type: selectedType === ArticleType.ALL ? undefined : selectedType
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