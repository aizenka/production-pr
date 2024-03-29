import type { StateSchema } from '@/app/providers/StoreProvider'

export const getProfileValidateErrors = (state: StateSchema) => {
  return state.profile?.validateProfileErrors
}