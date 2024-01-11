import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

export enum ValidateProfileError {
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
  INCORRECT_USER_CITY = 'INCORRECT_USER_CITY',
  INCORRECT_USERNAME = 'INCORRECT_USERNAME'
}

export interface Profile {
  id?: string
  firstName?: string,
  lastName?: string,
  age?: number,
  currency?: Currency,
  country?: Country,
  city?: string,
  username?: string,
  avatarUrl?: string
}

export interface ProfileSchema {
  data?: Profile,
  form?: Profile,
  isLoading: boolean,
  readonly: boolean,
  error?: string,
  validateProfileErrors?: ValidateProfileError[]
}