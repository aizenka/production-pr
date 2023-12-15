import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_USER_KEY } from 'shared/constants/localStorage'
import { User, UserSchema } from '../types/user'

const initialState: UserSchema = {}

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