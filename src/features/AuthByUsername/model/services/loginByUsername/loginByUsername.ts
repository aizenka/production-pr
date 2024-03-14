import { createAsyncThunk } from '@reduxjs/toolkit'
import type { User } from '@/entities/User'
import { userActions } from '@/entities/User'
import type { ThunkConfig } from '@/shared/config/store'
import { LOCAL_STORAGE_USER_KEY } from '@/shared/constants/localStorage'

interface LoginByUsernameProps {
  username: string,
  password: string
}

export const loginByUsername =
  createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>
  (
    'features/authByUsername/loginByUsername',
    async (authData, { dispatch, extra, rejectWithValue }) => {
      try {
        const response = await extra.api.post<User>('/login', authData)

        if (!response.data) {
          throw new Error()
        }

        localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data))
        dispatch(userActions.setAuthData(response.data))

        return response.data
      } catch (e) {
        return rejectWithValue('error')
      }
    }
  )