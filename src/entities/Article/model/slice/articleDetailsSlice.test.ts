import { fetchArticleById } from '../services'
import { articleDetailsReducer } from './articleDetailsSlice'
import type { ArticleDetailsSchema } from '../types/ArticleDetailsSchema'

const articleData = {
  id: '1',
  title: '123',
  subtitle: '332',
  img: 'ht',
  views: 1,
  createdAt: '13',
  'user': {
    'id': '1',
    'username': 'test user'
  },
  type: [],
  blocks: []
}

describe('articleDetailsSliceTest', () => {
  test('test update profile form service pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false
    }

    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.pending
    )).toEqual({
      isLoading: true,
      error: undefined
    })
  })

  test('test update profile form service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true
    }

    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.fulfilled(articleData, '', '')
    )).toEqual({
      isLoading: false,
      data: articleData
    })
  })
})