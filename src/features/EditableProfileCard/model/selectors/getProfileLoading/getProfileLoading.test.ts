import { getProfileLoading } from './getProfileLoading'
import type { StateSchema } from '@/app/providers/StoreProvider'

describe('getProfileLoadingTest', () => {
  test('should return loading true', () => {
    const state:DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    }
    expect(getProfileLoading(state as StateSchema)).toEqual(true)
  })

  test('should work with empty state', () => {
    const state:DeepPartial<StateSchema> = {}
    expect(getProfileLoading(state as StateSchema)).toEqual(undefined)
  })
})