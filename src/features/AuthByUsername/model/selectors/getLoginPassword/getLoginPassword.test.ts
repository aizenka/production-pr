import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'shared/config/store'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginErrorTest', () => {
  test('should return "123"', () => {
    const state:DeepPartial<StateSchema> = {
      loginForm: {
        password: '123'
      }
    }
    expect(getLoginPassword(state as StateSchema)).toBe('123')
  })

  test('should work with empty state', () => {
    const state:DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toBe('')
  })
})