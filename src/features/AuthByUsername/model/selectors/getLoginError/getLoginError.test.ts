import { getLoginError } from './getLoginError'
import type { StateSchema } from '@/app/providers/StoreProvider'

describe('getLoginErrorTest', () => {
  test('should return error message', () => {
    const state:DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error'
      }
    }
    expect(getLoginError(state as StateSchema)).toBe('error')
  })

  test('should work with empty state', () => {
    const state:DeepPartial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toBe(undefined)
  })
})