import type { StateSchema } from '@/app/providers/StoreProvider'
import { getLoginLoading } from './getLoginLoading'

describe('getLoginErrorTest', () => {
  test('should return true', () => {
    const state:DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true
      }
    }
    expect(getLoginLoading(state as StateSchema)).toBe(true)
  })

  test('should work with empty state', () => {
    const state:DeepPartial<StateSchema> = {}
    expect(getLoginLoading(state as StateSchema)).toBe(false)
  })
})