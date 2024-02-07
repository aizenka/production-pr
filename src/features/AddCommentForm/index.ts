import { FC, lazy } from 'react'
export { AddCommentFormSchema } from './model/types/AddCommentForm'
export {
  addCommentFormActions,
  addCommentFormReducer
} from './model/slice/addCommentFormSlice'
import { AddCommentFormProps } from './ui/AddCommentForm'

// eslint-disable-next-line max-len
export const AddCommentForm = lazy<FC<AddCommentFormProps>>(() => import('./ui/AddCommentForm'))