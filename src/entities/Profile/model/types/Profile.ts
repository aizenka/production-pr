import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

export interface Profile {
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
  error?: string
}