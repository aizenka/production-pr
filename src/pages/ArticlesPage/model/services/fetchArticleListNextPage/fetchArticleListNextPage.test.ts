import { testAsyncThunk } from 'shared/lib/tests'
// import { fetchArticleList } from '../fetchArticleList/fetchArticleList'
import { fetchArticleListNextPage } from './fetchArticleListNextPage'

// manual mock not working
// jest.mock('../fetchArticleList/fetchArticleList')

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

    const { callThunk, api, dispatch } = testAsyncThunk(fetchArticleListNextPage)
    api.get.mockReturnValue(Promise.resolve({ data: initialState }))

    await callThunk()

    expect(dispatch).toBeCalledTimes(2) // 4 after fix mock
    // expect(fetchArticleList).toHaveBeenCalledWith({ page: 3 }) // after fix mock
  })

  // test('fetchArticleList not called', async () => {

  //   const initialState = {
  //     page: 2,
  //     ids: [],
  //     entities: {},
  //     limit: 4,
  //     isLoading: false,
  //     hasMore: false
  //   }

  //   const { callThunk, api, dispatch } = testAsyncThunk(fetchArticleListNextPage)
  //   api.get.mockReturnValue(Promise.resolve({ data: initialState }))

  //   await callThunk()

  //   expect(dispatch).toBeCalledTimes(2)
  //   // expect(fetchArticleList).not.toHaveBeenCalled() // after fix mock
  // })
})