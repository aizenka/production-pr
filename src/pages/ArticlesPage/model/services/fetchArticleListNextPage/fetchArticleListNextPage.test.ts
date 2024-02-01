import { testAsyncThunk } from 'shared/lib/tests'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'
import { fetchArticleListNextPage } from './fetchArticleListNextPage'

jest.mock('../fetchArticleList/fetchArticleList')

describe('fetchArticleListNextPageTest', () => {
  test('sucess fetch next page', async () => {

    const initialState = {
      page: 2,
      ids: [],
      entities: {},
      limit: 4,
      isLoading: false,
      hasMore: true
    }

    const { callThunk, dispatch } = testAsyncThunk(fetchArticleListNextPage, {
      articlesPage: initialState
    })

    await callThunk()

    expect(dispatch).toBeCalledTimes(4)
  })

  test('fetchArticleList not called', async () => {

    const initialState = {
      page: 2,
      ids: [],
      entities: {},
      limit: 4,
      isLoading: false,
      hasMore: false
    }

    const { callThunk, dispatch } = testAsyncThunk(fetchArticleListNextPage, {
      articlesPage: initialState
    })

    await callThunk()

    expect(dispatch).toBeCalledTimes(2)
    expect(fetchArticleList).not.toHaveBeenCalled()
  })
})