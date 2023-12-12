import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, userActions } from 'entities/User'
import { ThunkConfig } from 'shared/config/store'
import { LOCAL_STORAGE_USER_KEY } from 'shared/constants/localStorage'

interface LoginByUsernameProps {
  username: string,
  password: string
}



// enum LoginErrors {
//   INCORRECT_DATA = '',
//   SERVER_ERROR = ''
// }

export const loginByUsername =
  createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>
  (
    'features/loginByUsername',
    async (authData, { dispatch, extra, rejectWithValue }) => {
      try {
        const response = await extra.api.post<User>('/login', authData)

        if (!response.data) {
          throw new Error()
        }

        localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(authData))
        dispatch(userActions.setAuthData(response.data))

        return response.data
      } catch (e) {
        return rejectWithValue('error')
      }
    }
  )