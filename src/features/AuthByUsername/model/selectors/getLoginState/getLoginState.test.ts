import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'shared/config/store'
import { getLoginState } from './getLoginState'

describe('getLoginErrorTest', () => {
  test('should return loginForm object', () => {
    const loginFormObject = {
      username: '',
      password: '',
      isLoading: false
    }
    const state:DeepPartial<StateSchema> = {
      loginForm: loginFormObject
    }
    expect(getLoginState(state as StateSchema)).toEqual(loginFormObject)
  })

  test('should work with empty state', () => {
    const loginEmptyState = {
      username: '',
      password: '',
      isLoading: false
    }

    const state:DeepPartial<StateSchema> = {}
    expect(getLoginState(state as StateSchema)).toEqual(loginEmptyState)
  })
})