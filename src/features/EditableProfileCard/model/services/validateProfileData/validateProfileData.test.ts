import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { validateProfileData } from './validateProfileData'
import { ValidateProfileError } from '../../consts'

const profileData = {
  firstName: 'asd',
  lastName: 'dsa',
  age: 33,
  currency: Currency.EUR,
  country: Country.Belarus,
  city: 'Moscow',
  username: 'admin'
}

describe('validateProfileDataTest', () => {
  test('should return empty array', async () => {
    const result = validateProfileData(profileData)

    expect(result).toEqual([])
  })

  test('without first and last name', async () => {
    const result = validateProfileData({
      ...profileData,
      firstName: '',
      lastName: ''
    })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA
    ])
  })

  test('with incorrect age', async () => {
    const result = validateProfileData({
      ...profileData,
      age: undefined
    })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_AGE
    ])
  })

  test('with incorrect city', async () => {
    const result = validateProfileData({
      ...profileData,
      city: undefined
    })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_CITY
    ])
  })

  test('with incorrect username', async () => {
    const result = validateProfileData({
      ...profileData,
      username: undefined
    })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USERNAME
    ])
  })

  test('with no profile', async () => {
    const result = validateProfileData()

    expect(result).toEqual([
      ValidateProfileError.NO_DATA
    ])
  })

  test('with incorrect all', async () => {
    const result = validateProfileData({})

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_USER_AGE,
      ValidateProfileError.INCORRECT_USER_CITY,
      ValidateProfileError.INCORRECT_USERNAME
    ])
  })
})