import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services'
import { Profile, ProfileSchema } from '../types/Profile'

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (
        state,
        { payload }: PayloadAction<Profile>
      ) => {
        state.isLoading = false
        state.data = payload
      })
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.error = payload
        state.isLoading = false
      })
  }
})

export const {
  actions: profileActions,
  reducer: profileReducer
} = profileSlice