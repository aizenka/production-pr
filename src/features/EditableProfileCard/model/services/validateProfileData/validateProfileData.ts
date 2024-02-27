import { Profile } from 'entities/Profile'
import { ValidateProfileError } from '../../types/EditableProfileCardSchema'

export const validateProfileData = (profile?: Profile) => {
  const errors: ValidateProfileError[] = []

  if (!profile) {
    return [ValidateProfileError.NO_DATA]
  }

  const {
    firstName,
    lastName,
    age,
    city,
    username
  } = profile

  if (!firstName || !lastName) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA)
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_USER_AGE)
  }

  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_USER_CITY)
  }

  if (!username) {
    errors.push(ValidateProfileError.INCORRECT_USERNAME)
  }

  return errors
}