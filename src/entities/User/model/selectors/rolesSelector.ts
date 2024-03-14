import { createSelector } from '@reduxjs/toolkit'
import type { StateSchema } from '@/shared/config/store'
import { UserRole } from '../types/user'

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles

export const isUserAdmin = createSelector(getUserRoles, (roles) => {
  return !!roles?.includes(UserRole.ADMIN)
})

export const isUserManager = createSelector(getUserRoles, (roles) => {
  return !!roles?.includes(UserRole.MANAGER)
})