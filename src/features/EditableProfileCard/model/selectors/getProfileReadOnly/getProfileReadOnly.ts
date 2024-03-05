import type { StateSchema } from 'shared/config/store'

export const getProfileReadOnly = (state: StateSchema) => state.profile?.readonly