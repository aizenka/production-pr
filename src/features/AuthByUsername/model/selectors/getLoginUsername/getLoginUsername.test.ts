import { getLoginUsername } from './getLoginUsername'
import type { StateSchema } from '@/app/providers/StoreProvider'

describe('getLoginErrorTest', () => {
  test('should return "username"', () => {
    const state:DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username'
      }
    }
    expect(getLoginUsername(state as StateSchema)).toBe('username')
  })

  test('should work with empty state', () => {
    const state:DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toBe('')
  })
})