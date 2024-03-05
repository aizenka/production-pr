import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_USER_KEY } from 'shared/constants/localStorage'
import type { User, UserSchema } from '../types/user'

const initialState: UserSchema = {
  _mounted: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY)

      if (user) {
        state.authData = JSON.parse(user)
      }

      state._mounted = true
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
    }
  }
})

export const {
  actions: userActions,
  reducer: userReducer
} = userSlice