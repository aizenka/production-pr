import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { AddCommentForm } from '@/entities/AddCommentForm'
import { CommentList } from '@/entities/Comment'
import { classNames } from '@/shared/lib/common'
import { Column, Text } from '@/shared/ui'
import { COMMENTS_NAMESPACE } from '@/shared/constants/i18n'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'
import {
  getArticleCommentsLoading,
  getArticleCommentsError
} from '../../selectors/comments'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { fetchCommentsByArticleId, addCommentForArticle } from '../../model/services'

interface ArticleDetailsPageCommentsProps {
  className?: string,
  id: string
}

export const ArticleDetailsPageComments = memo(
  (props: ArticleDetailsPageCommentsProps) => {
    const { className, id } = props
    const { t } = useTranslation(COMMENTS_NAMESPACE)
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsLoading)
    const commentsError = useSelector(getArticleCommentsError)

    useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id))
    }, [])

    const onSendComment = useCallback((text: string) => {
      dispatch(addCommentForArticle(text))
    }, [dispatch])

    return (
      <Column
        className={classNames('', {}, [className])}
        gap={24}
      >
        <Text title={t('comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          comments={comments}
          isLoading={commentsIsLoading}
          error={commentsError}
        />
      </Column>
    )
  })