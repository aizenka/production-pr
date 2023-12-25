import { testAsyncThunk } from 'shared/lib/tests'
import { fetchArticleById } from './fetchArticleById'

describe('fetchArticleByIdTest', () => {
  test('sucess fetch', async () => {
    const articleData = {
      id: '1',
      title: '123',
      subtitle: '332',
      img: 'ht',
      views: 1,
      createdAt: '13'
    }

    const { callThunk, api } = testAsyncThunk(fetchArticleById)
    api.get.mockReturnValue(Promise.resolve({ data: articleData }))

    const result = await callThunk('1')

    expect(api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(articleData)
  })

  test('error fetch', async () => {
    const { callThunk, api } = testAsyncThunk(fetchArticleById)
    api.get.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await callThunk('1')

    expect(result.meta.requestStatus).toBe('rejected')

  })
})