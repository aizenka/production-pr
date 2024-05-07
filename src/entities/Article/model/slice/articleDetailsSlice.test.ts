import { fetchArticleById } from '../services'
import { articleDetailsReducer } from './articleDetailsSlice'
import type { PayloadAction } from '@reduxjs/toolkit'
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

    // TODO: rewrite thunk
    const action:
     PayloadAction<undefined, string,
     { arg: string; requestId: string; requestStatus: 'pending'; }, never> = {
       type: fetchArticleById.pending.type,
       payload: undefined,
       meta: {
         arg: 'some argument',
         requestId: 'some request id',
         requestStatus: 'pending'
       }
     }


    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      action
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