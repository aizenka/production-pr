import type { StateSchema } from '@/shared/config/store'

export const getLoginError = (state: StateSchema) => state?.loginForm?.error