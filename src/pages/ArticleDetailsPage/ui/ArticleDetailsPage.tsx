import { memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { ArticleDetails, ArticleList, ArticleListView } from 'entities/Article'
import { classNames } from 'shared/lib/common'
import { ARTICLE_DETAILS_NAMESPACE } from 'shared/constants/i18n'
import { CommentList } from 'entities/Comment'
import { AddCommentForm } from 'features/AddCommentForm'
import { PageWrapper } from 'widgets/PageWrapper'
import { Text } from 'shared/ui'
import { TextSize } from 'shared/ui/Text/Text'
import { useDynamicModuleLoader, useInitialEffect } from 'shared/lib/hooks'
import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader'
import { getArticleComments } from '../model/slice/articleDetailsCommentsSlice'
import { getArticleCommentsError, getArticleCommentsLoading } from '../selectors/comments'
import {
  addCommentForArticle,
  fetchArticleRecommendations,
  fetchCommentsByArticleId
} from '../model/services'
import {
  getArticleRecommendations
} from '../model/slice/articleDetailsRecomendationsSlice'
import { getArticleDetailsRecommendationsLoading } from '../selectors/recommendations'
import { articleDetailsPageReducer } from '../model/slice'
import {
  ArticleDetailsPageHeader
} from './ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  useDynamicModuleLoader(reducers)
  const { t } = useTranslation(ARTICLE_DETAILS_NAMESPACE)
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsLoading)
  const commentsError = useSelector(getArticleCommentsError)
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const recommendationsLoading = useSelector(getArticleDetailsRecommendationsLoading)

  useInitialEffect(() => {
    dispatch(fetchArticleRecommendations())
    dispatch(fetchCommentsByArticleId(id))
  }, [])

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  return (
    <PageWrapper className={classNames(cls.articleDetailsPage, {}, [className])}>
      <div className={cls.articleDetailsPage}>
        <ArticleDetailsPageHeader />
        {
          !id ? (
            <div>{t('articleNotFound')}</div>
          ) : (
            <>
              <ArticleDetails id={id} />
              <div className={cls.recommendationsWrapper}>
                <Text size={TextSize.L} title={t('recommended')}/>
                <ArticleList
                  className={cls.recommendations}
                  articles={recommendations}
                  isLoading={recommendationsLoading}
                  view={ArticleListView.GRID}
                  openInNewWindow
                />
              </div>
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
    </PageWrapper>
  )
}

export default memo(ArticleDetailsPage)