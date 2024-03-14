import type { Profile } from '@/entities/Profile'
import type { ValidateProfileError } from '../consts'

export interface ProfileSchema {
  data?: Profile,
  form?: Profile,
  isLoading: boolean,
  readonly: boolean,
  error?: string,
  validateProfileErrors?: ValidateProfileError[]
}
