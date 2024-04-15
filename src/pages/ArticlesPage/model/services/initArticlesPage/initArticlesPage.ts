import { createAsyncThunk } from '@reduxjs/toolkit'
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'
import type { ArticleSortField, ArticleType } from '@/entities/Article'
import type { ThunkConfig } from '@/app/providers/StoreProvider'
import type { SortOrder } from '@/shared/types'

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
> (
  'pages/articlesPage/initArticlesPage',
  async (searchParams, { getState, dispatch }) => {
    const inited = getArticlesPageInited(getState())

    if (inited) return

    searchParams.forEach((value, key) => {
      switch (key) {
      case 'order':
        dispatch(articlesPageActions.setOrder(value as SortOrder))
        break
      case 'sort':
        dispatch(articlesPageActions.setSort(value as ArticleSortField))
        break
      case 'search':
        dispatch(articlesPageActions.setSearch(value))
        break
      case 'selectedType':
        dispatch(articlesPageActions.setSelectedType(value as ArticleType))
        break
      }
    })

    dispatch(articlesPageActions.initState())
    dispatch(fetchArticleList({}))
  }
)