import type { StateSchema } from 'shared/config/store'

export const getProfileLoading = (state: StateSchema) => state.profile?.isLoading