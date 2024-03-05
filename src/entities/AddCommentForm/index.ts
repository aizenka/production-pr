import type { FC } from 'react'
import { lazy } from 'react'
export type { AddCommentFormSchema } from './model/types/AddCommentForm'
export {
  addCommentFormActions,
  addCommentFormReducer
} from './model/slice/addCommentFormSlice'
import type { AddCommentFormProps } from './ui/AddCommentForm'

// eslint-disable-next-line max-len
export const AddCommentForm = lazy<FC<AddCommentFormProps>>(() => import('./ui/AddCommentForm'))