import { FC, lazy } from 'react'
export { AddCommentFormSchema } from './model/types/AddCommentForm'
export {
  addCommentFormActions,
  addCommentFormReducer
} from './model/slice/addCommentFormSlice'
import { AddCommentFormProps } from './ui/AddCommentForm'

export const AddCommentForm = lazy<FC<AddCommentFormProps>>(() => new Promise(resolve => {
  setTimeout(() => resolve(import('./ui/AddCommentForm')), 1500)
}))