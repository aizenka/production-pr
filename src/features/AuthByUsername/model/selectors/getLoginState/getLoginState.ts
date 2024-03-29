import type { StateSchema } from '@/app/providers/StoreProvider'
import { getLoginError } from '../getLoginError/getLoginError'
import { getLoginLoading } from '../getLoginLoading/getLoginLoading'
import { getLoginPassword } from '../getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../getLoginUsername/getLoginUsername'

export const getLoginState = (state: StateSchema) => {
  const defaultLoginState = {
    username: getLoginUsername(state),
    password: getLoginPassword(state),
    isLoading: getLoginLoading(state),
    error: getLoginError(state)
  }
  return state?.loginForm || defaultLoginState
}