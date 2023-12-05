import { StateSchema } from 'shared/config/store'

export const getLoginLoading = (state: StateSchema) => {
  return state?.loginForm?.isLoading || false
}