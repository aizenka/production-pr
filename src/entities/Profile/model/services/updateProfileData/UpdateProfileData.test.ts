import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { testAsyncThunk } from 'shared/lib/tests'
import { ValidateProfileError } from '../../types/Profile'
import { updateProfileData } from './updateProfileData'

const profileData = {
  firstName: 'asd',
  lastName: 'dsa',
  age: 33,
  currency: Currency.EUR,
  country: Country.Belarus,
  city: 'Moscow',
  username: 'admin',
  id: '1'
}

describe('updateProfileDataTest', () => {
  test('sucess update', async () => {

    const { callThunk, api } = testAsyncThunk(updateProfileData, {
      profile: {
        form: profileData
      }
    })
    api.put.mockReturnValue(Promise.resolve({ data: profileData }))

    const result = await callThunk()

    expect(api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profileData)
  })

  test('server error', async () => {
    const { callThunk, api } = testAsyncThunk(updateProfileData, {
      profile: {
        form: profileData
      }
    })
    api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
  })

  test('client validate error', async () => {
    const { callThunk } = testAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...profileData, firstName: '', lastName: '' }
      }
    })

    const result = await callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })
})