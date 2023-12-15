import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData, updateProfileData } from '../services'
import { Profile, ProfileSchema } from '../types/Profile'

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, { payload }: PayloadAction<boolean>) => {
      state.readonly = payload
    },
    cancelEdit: (state) => {
      state.readonly = true,
      state.form = state.data
    },
    updateProfileForm: (state, { payload }: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...payload
      }
    }
  },
  extraReducers: (builder) => {
    builder
      // fetchProfileData
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
        state.form = payload
      })
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.error = payload
        state.isLoading = false
      })

      // updateProfileData
      .addCase(updateProfileData.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(updateProfileData.fulfilled, (
        state,
        { payload }: PayloadAction<Profile>
      ) => {
        state.isLoading = false
        state.data = payload
        state.form = payload
      })
      .addCase(updateProfileData.rejected, (state, { payload }) => {
        state.error = payload
        state.isLoading = false
      })
  }
})

export const {
  actions: profileActions,
  reducer: profileReducer
} = profileSlice