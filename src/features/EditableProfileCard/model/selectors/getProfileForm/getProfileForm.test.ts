import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import type { StateSchema } from '@/shared/config/store'
import { getProfileForm } from './getProfileForm'

describe('getProfileFormTest', () => {
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
        form: data
      }
    }
    expect(getProfileForm(state as StateSchema)).toEqual(data)
  })

  test('should work with empty state', () => {
    const state:DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})