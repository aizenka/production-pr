import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { AddCommentFormSchema } from '../types/AddCommentForm'

const initialState: AddCommentFormSchema = {
  text: ''
}

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, { payload }: PayloadAction<string>) => {
      state.text = payload
    }
  }
})

export const {
  actions: addCommentFormActions,
  reducer: addCommentFormReducer
} = addCommentFormSlice