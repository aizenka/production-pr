import type { StateSchema } from '@/shared/config/store'

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || ''