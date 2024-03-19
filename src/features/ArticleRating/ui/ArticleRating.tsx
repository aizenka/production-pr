import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RatingCard } from '@/entities/Rating'
import { ARTICLE_DETAILS_NAMESPACE } from '@/shared/constants/i18n'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui'
import {
  useGetArticleRating,
  useRateArticle,
  useUpdateArticleRate
} from '../api/articleRating'

export interface ArticleRatingProps {
  className?: string
  articleId: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props
  const { t } = useTranslation(ARTICLE_DETAILS_NAMESPACE)
  const authData = useSelector(getUserAuthData)
  const { data: ratings, isLoading } = useGetArticleRating(
    {
      articleId,
      userId: authData!.id
    }
  )
  const [rateArticle] = useRateArticle()
  const [updateArticleRate] = useUpdateArticleRate()

  const rating = ratings?.[0]

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    const body = {
      articleId,
      userId: authData!.id,
      rate: starsCount,
      feedback
    }

    if (rating) {
      updateArticleRate({ id: rating.id, ...body })
    } else {
      rateArticle(body)
    }
  }, [rateArticle, articleId, authData, rating, updateArticleRate])

  const onSubmit = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback)
  }, [handleRateArticle])

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount)
  }, [handleRateArticle])

  if (isLoading) {
    return (
      <Skeleton width='100%' height='120px' />
    )
  }

  return (
    <RatingCard
      className={className}
      title={t('rateArticle')}
      feedbackTitle={t('leaveArticleFeedback')}
      rate={rating?.rate}
      feedbackText={rating?.feedback}
      onSubmit={onSubmit}
      onCancel={onCancel}
    />
  )
})

export default ArticleRating