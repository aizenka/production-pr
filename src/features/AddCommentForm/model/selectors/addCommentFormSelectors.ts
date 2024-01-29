import { StateSchema } from 'shared/config/store'

export const getCommentFormText = (state: StateSchema) => state.addCommentForm?.text ?? ''
export const getCommentFormError = (state: StateSchema) => state.addCommentForm?.error