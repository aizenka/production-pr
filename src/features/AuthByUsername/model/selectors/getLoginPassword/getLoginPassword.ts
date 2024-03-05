import type { StateSchema } from 'shared/config/store'

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || ''