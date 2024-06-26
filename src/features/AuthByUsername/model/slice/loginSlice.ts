import { createSlice } from '@reduxjs/toolkit'
import { loginByUsername } from '../services'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { LoginSchema } from '../types/LoginSchema'

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, { payload }: PayloadAction<string>) => {
      state.username = payload
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(loginByUsername.rejected, (state, { payload }) => {
        state.error = payload
        state.isLoading = false
      })
  }
})

export const {
  actions: loginActions,
  reducer: loginReducer
} = loginSlice