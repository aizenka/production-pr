import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Profile } from '@/entities/Profile'
import type { ThunkConfig } from '@/shared/config/store'

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>> (
  'entities/profile/fetchProfileData',
  async (profileId, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Profile>(`/profiles/${profileId}`)

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)