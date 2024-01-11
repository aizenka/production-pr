import { memo, useCallback } from 'react'
import { ArticleDetails } from 'entities/Article'
import { classNames } from 'shared/lib/common'
import cls from './ArticleDetailsPage.module.scss'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ARTICLE_DETAILS_NAMESPACE } from 'shared/constants/i18n'
import { CommentList } from 'entities/Comment'
import { useDynamicModuleLoader, useInitialEffect } from 'shared/lib/hooks'
import {
  articleDetailCommentsReducer,
  getArticleComments
} from '../model/slice/articleDetailsCommentsSlice'
import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleCommentsError, getArticleCommentsLoading } from '../selectors/comments'
import { addCommentForArticle, fetchCommentsByArticleId } from '../model/services'
import { AddCommentForm } from 'features/AddCommentForm'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailCommentsReducer
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  useDynamicModuleLoader(reducers)
  const { t } = useTranslation(ARTICLE_DETAILS_NAMESPACE)
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
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
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      {
        !id ? (
          <div>{t('articleNotFound')}</div>
        ) : (
          <>
            <ArticleDetails id={id} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
              comments={comments}
              isLoading={commentsIsLoading}
              error={commentsError}
            />
          </>
        )
      }
    </div>
  )
}

export default memo(ArticleDetailsPage)