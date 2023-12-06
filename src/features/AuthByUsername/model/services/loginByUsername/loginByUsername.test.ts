import axios from 'axios'
import { userActions } from 'entities/User'
import { testAsyncThunk } from 'shared/lib/tests'
import { loginByUsername } from './loginByUsername'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsernameTest', () => {
  test('sucess login', async () => {
    const userValue = { id: '1', username: '123' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const { callThunk, dispatch } = testAsyncThunk(loginByUsername)
    const result = await callThunk({ username: '123', password: '123' })

    expect(dispatch).toHaveBeenCalledTimes(3)
    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const { callThunk, dispatch } = testAsyncThunk(loginByUsername)
    const result = await callThunk({ username: '123', password: '123' })

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('error')
  })
})