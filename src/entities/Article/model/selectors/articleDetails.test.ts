import type { StateSchema } from '@/shared/config/store'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading
} from './articleDetails'

describe('articleDetailsTest', () => {
  test('should return data object', () => {
    const data = {
      id: '1',
      title: '123',
      subtitle: '332',
      img: 'ht',
      views: 1,
      createdAt: '13'
    }
    const state:DeepPartial<StateSchema> = {
      articleDetails: {
        data
      }
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
  })

  test('should work with empty state', () => {
    const state:DeepPartial<StateSchema> = {}
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
  })

  test('should return error string', () => {
    const state:DeepPartial<StateSchema> = {
      articleDetails: {
        error: '123'
      }
    }
    expect(getArticleDetailsError(state as StateSchema)).toEqual('123')
  })

  test('should work with empty state', () => {
    const state:DeepPartial<StateSchema> = {}
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
  })

  test('should return loading true', () => {
    const state:DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    }
    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(true)
  })

  test('should work with empty state', () => {
    const state:DeepPartial<StateSchema> = {}
    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(undefined)
  })
})