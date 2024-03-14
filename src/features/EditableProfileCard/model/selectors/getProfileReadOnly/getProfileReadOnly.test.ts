import type { StateSchema } from '@/shared/config/store'
import { getProfileReadOnly } from './getProfileReadOnly'

describe('getProfileReadOnlyTest', () => {
  test('should return readonly true', () => {
    const state:DeepPartial<StateSchema> = {
      profile: {
        readonly: true
      }
    }
    expect(getProfileReadOnly(state as StateSchema)).toEqual(true)
  })

  test('should work with empty state', () => {
    const state:DeepPartial<StateSchema> = {}
    expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined)
  })
})