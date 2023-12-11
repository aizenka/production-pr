import { Country, Currensy } from 'shared/constants/common'

export interface Profile {
  firstName: string,
  lastName: string,
  age: number,
  currensy: Currensy,
  county: Country,
  city: string,
  username: string,
  avatarUrl: string
}

export interface ProfileSchema {
  data?: Profile,
  isLoading: boolean,
  readonly: boolean,
  error?: string
}