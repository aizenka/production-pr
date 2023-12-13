import { LoginSchema } from '../types/LoginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSliceTest', () => {
  test('username should be setted', () => {
    const state: DeepPartial<LoginSchema> = {
      username: ''
    }

    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('123')
    )
    ).toEqual({ username: '123' })
  })

  test('password should be setted', () => {
    const state: DeepPartial<LoginSchema> = {
      password: ''
    }

    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('123')
    )
    ).toEqual({ password: '123' })
  })
})