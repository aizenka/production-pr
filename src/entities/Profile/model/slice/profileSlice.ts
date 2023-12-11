import { createSlice } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/Profile'

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {}
})

export const {
  actions: profileActions,
  reducer: profileReducer
} = profileSlice