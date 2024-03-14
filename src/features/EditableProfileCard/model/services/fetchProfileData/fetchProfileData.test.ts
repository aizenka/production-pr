import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { testAsyncThunk } from '@/shared/lib/tests'
import { fetchProfileData } from './fetchProfileData'

describe('fetchProfileDataTest', () => {
  test('sucess fetch', async () => {
    const profileData = {
      firstName: 'asd',
      lastName: 'dsa',
      age: 33,
      currency: Currency.EUR,
      country: Country.Belarus,
      city: 'Moscow',
      username: 'admin'
    }

    const { callThunk, api } = testAsyncThunk(fetchProfileData)
    api.get.mockReturnValue(Promise.resolve({ data: profileData }))

    const result = await callThunk('1')

    expect(api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profileData)
  })

  test('error fetch', async () => {
    const { callThunk, api } = testAsyncThunk(fetchProfileData)
    api.get.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await callThunk('1')

    expect(result.meta.requestStatus).toBe('rejected')

  })
})