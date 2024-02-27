import { Profile } from 'entities/Profile'

export enum ValidateProfileError {
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
  INCORRECT_USER_CITY = 'INCORRECT_USER_CITY',
  INCORRECT_USERNAME = 'INCORRECT_USERNAME'
}

export interface ProfileSchema {
  data?: Profile,
  form?: Profile,
  isLoading: boolean,
  readonly: boolean,
  error?: string,
  validateProfileErrors?: ValidateProfileError[]
}