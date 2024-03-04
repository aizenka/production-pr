export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  MANAGER = 'manager'
}

export interface User {
  id: string
  username: string
  avatarUrl?: string
  roles?: UserRole[]
}

export interface UserSchema {
  authData?: User
  _mounted: boolean
}