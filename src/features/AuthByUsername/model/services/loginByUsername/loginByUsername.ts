import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from 'entities/User'
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
  createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
  >
  (
    'features/loginByUsername',
    async (authData, thunkAPI) => {
      try {
        const response = await axios.post<User>(
          'http://localhost:8080/login',
          authData
        )

        localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(authData))
        thunkAPI.dispatch(userActions.setAuthData(response.data))

        return response.data
      } catch (e) {
        return thunkAPI.rejectWithValue('error')
      }
    }
  )