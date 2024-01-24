import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'shared/config/store'
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
> (
  'pages/articlesPage/initArticlesPage',
  async (_, { getState, dispatch }) => {
    const inited = getArticlesPageInited(getState())

    if (!inited) {
      dispatch(articlesPageActions.initState())
      dispatch(fetchArticleList({ page: 1 }))
    }
  }
)