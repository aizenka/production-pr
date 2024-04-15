import { getProfileError } from './getProfileError'
import type { StateSchema } from '@/app/providers/StoreProvider'

describe('getProfileErrorTest', () => {
  test('should return error string', () => {
    const state:DeepPartial<StateSchema> = {
      profile: {
        error: '123'
      }
    }
    expect(getProfileError(state as StateSchema)).toEqual('123')
  })

  test('should work with empty state', () => {
    const state:DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})