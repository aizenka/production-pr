import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Profile } from '@/entities/Profile'
import type { ThunkConfig } from '@/app/providers/StoreProvider'
import { getProfileForm } from '../../selectors'
import { validateProfileData } from '../validateProfileData/validateProfileData'
import { ValidateProfileError } from '../../consts'

export const updateProfileData = createAsyncThunk<
  Profile, void, ThunkConfig<ValidateProfileError[]>
>(
  'entities/profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    try {
      const formData = getProfileForm(getState())

      const formErrors = validateProfileData(formData)

      if (formErrors.length) {
        return rejectWithValue(formErrors)
      }

      const response = await extra.api.put<Profile>(`/profiles/${formData?.id}`, formData)

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
  }
)