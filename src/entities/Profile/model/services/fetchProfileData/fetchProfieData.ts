import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'shared/config/store'
import { Profile } from '../../types/Profile'

// enum FetchProfileErrors {
//   INCORRECT_DATA = '',
//   SERVER_ERROR = ''
// }

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>> (
  'entities/profile/fetchProfileData',
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Profile>('/profile')

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)