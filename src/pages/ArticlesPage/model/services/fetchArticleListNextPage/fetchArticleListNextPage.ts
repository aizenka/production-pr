import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'shared/config/store'
import {
  getArticlesPageListHasMore,
  getArticlesPageLoading,
  getArticlesPageNum
} from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'

export const fetchArticleListNextPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
> (
  'pages/articlesPage/fetchArticleListNextPage',
  async (_, { getState, dispatch }) => {
    const hasMore = getArticlesPageListHasMore(getState())
    const page = getArticlesPageNum(getState())
    const isLoading = getArticlesPageLoading(getState())

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1))
      dispatch(fetchArticleList({ page: page + 1 }))
    }
  }
)