import { userActions } from '@/entities/User'
import { testAsyncThunk } from '@/shared/lib/tests'
import { loginByUsername } from './loginByUsername'

describe('loginByUsernameTest', () => {
  test('sucess login', async () => {
    const userValue = { id: '1', username: '123' }

    const { callThunk, dispatch, api } = testAsyncThunk(loginByUsername)
    api.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const result = await callThunk({ username: '123', password: '123' })

    expect(dispatch).toHaveBeenCalledTimes(3)
    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })

  test('error login', async () => {
    const { callThunk, dispatch, api } = testAsyncThunk(loginByUsername)
    api.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await callThunk({ username: '123', password: '123' })

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('error')
  })
})