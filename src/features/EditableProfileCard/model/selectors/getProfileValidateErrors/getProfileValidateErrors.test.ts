import { StateSchema } from 'shared/config/store'
import { ValidateProfileError } from '../../types/EditableProfileCardSchema'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileValidateErrorsTest', () => {
  test('should return validate errors', () => {
    const state:DeepPartial<StateSchema> = {
      profile: {
        validateProfileErrors: [
          ValidateProfileError.SERVER_ERROR,
          ValidateProfileError.INCORRECT_USER_AGE
        ]
      }
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_USER_AGE
    ])
  })

  test('should work with empty state', () => {
    const state:DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})