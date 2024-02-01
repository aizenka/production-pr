import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'shared/config/store'
import { Article, ArticleType } from 'entities/Article'
import {
  getArticlesPageListLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSelectedType,
  getArticlesPageSort
} from '../../selectors/articlesPageSelectors'
import { addQueryParams } from 'shared/lib/helpers'

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