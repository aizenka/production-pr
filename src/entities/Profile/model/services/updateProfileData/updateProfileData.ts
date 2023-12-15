import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'shared/config/store'
import { getProfileForm } from '../../selectors'
import { Profile } from '../../types/Profile'

// enum FetchProfileErrors {
//   INCORRECT_DATA = '',
//   SERVER_ERROR = ''
// }

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>> (
  'entities/profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    try {
      const formData = getProfileForm(getState())

      const response = await extra.api.put<Profile>('/profile', formData)

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)