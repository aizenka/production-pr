import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import type { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileData } from './getProfileData'

describe('getProfileDataTest', () => {
  test('should return data object', () => {
    const data = {
      firstName: 'asd',
      lastName: 'dsa',
      age: 33,
      currency: Currency.EUR,
      country: Country.Belarus,
      city: 'Moscow',
      username: 'admin'
    }
    const state:DeepPartial<StateSchema> = {
      profile: {
        data: data
      }
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })

  test('should work with empty state', () => {
    const state:DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})