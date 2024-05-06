import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { COMMENTS_NAMESPACE } from '@/shared/constants/i18n'
import { classNames } from '@/shared/lib/common'
import { Button, Input, Row } from '@/shared/ui'
import { useAppDispatch, useDynamicModuleLoader } from '@/shared/lib/hooks'
import { getCommentFormText } from '../model/selectors/addCommentFormSelectors'
import {
  addCommentFormActions,
  addCommentFormReducer
} from '../model/slice/addCommentFormSlice'
import cls from './AddCommentForm.module.scss'
import type { ReducersList } from '@/shared/lib/hooks/useDynamicModuleLoader'

export interface AddCommentFormProps {
  className?: string,
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  useDynamicModuleLoader(reducers)
  const { t } = useTranslation(COMMENTS_NAMESPACE)
  const dispatch = useAppDispatch()
  const text = useSelector(getCommentFormText)

  const onTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onTextChange('')
  }, [onSendComment, onTextChange, text])

  return (
    <Row
      className={classNames(cls.addCommentForm, {}, [className])}
      align='between'
      vAlign='center'
      data-testid='AddCommentForm'
    >
      <Input
        className={cls.input}
        placeholder={t('typeCommentText')}
        value={text}
        onChange={onTextChange}
        data-testid='AddCommentForm.Input'
      />
      <Button
        variant='outlined'
        onClick={onSendHandler}
        data-testid='AddCommentForm.SendBtn'
      >
        {t('send')}
      </Button>
    </Row>
  )
})

export default AddCommentForm