import { memo, useCallback } from 'react'
import { ArticleDetails, ArticleList, ArticleListView } from 'entities/Article'
import { classNames } from 'shared/lib/common'
import cls from './ArticleDetailsPage.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ARTICLE_DETAILS_NAMESPACE } from 'shared/constants/i18n'
import { CommentList } from 'entities/Comment'
import { useDynamicModuleLoader, useInitialEffect } from 'shared/lib/hooks'
import { getArticleComments } from '../model/slice/articleDetailsCommentsSlice'
import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleCommentsError, getArticleCommentsLoading } from '../selectors/comments'
import {
  addCommentForArticle,
  fetchArticleRecommendations,
  fetchCommentsByArticleId
} from '../model/services'
import { AddCommentForm } from 'features/AddCommentForm'
import { PageWrapper } from 'widgets/PageWrapper'
import { Button, Text } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import {
  getArticleRecommendations
} from '../model/slice/articleDetailsRecomendationsSlice'
import { getArticleDetailsRecommendationsLoading } from '../selectors/recommendations'
import { TextSize } from 'shared/ui/Text/Text'
import { articleDetailsPageReducer } from '../model/slice'

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
  const navigate = useNavigate()
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

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  return (
    <PageWrapper className={classNames(cls.articleDetailsPage, {}, [className])}>
      <Button
        className={cls.backButton}
        variant={ButtonVariant.OUTLINED}
        onClick={onBackToList}
      >
        {t('goBack')}
      </Button>
      <div className={cls.articleDetailsPage}>
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