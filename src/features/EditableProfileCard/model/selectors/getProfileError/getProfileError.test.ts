import type { StateSchema } from '@/shared/config/store'
import { getProfileError } from './getProfileError'

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