import type { StateSchema } from '@/shared/config/store'

export const getProfileValidateErrors = (state: StateSchema) => {
  return state.profile?.validateProfileErrors
}