import type { StateSchema } from '@/shared/config/store'
import { getLoginError } from './getLoginError'

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