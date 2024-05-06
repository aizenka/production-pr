import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleList, ArticleListView } from '@/entities/Article'
import { ARTICLE_DETAILS_NAMESPACE } from '@/shared/constants/i18n'
import { classNames } from '@/shared/lib/common'
import { Column, Text } from '@/shared/ui'
import { useArticleRecommendationList } from '../api/articleRecommendationsApi'
import cls from './ArticleRecommendationList.module.scss'

interface ArticleRecommendationListProps {
  className?: string
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
  const { className } = props
  const { t } = useTranslation(ARTICLE_DETAILS_NAMESPACE)
  const { data: articles = [], isLoading, error } = useArticleRecommendationList(8)

  // TODO: add logic
  if (isLoading || error) {
    return null
  }

  return (
    <Column
      className={classNames('', {}, [className])}
      gap={16}
      data-testid='ArticleRecommendationList'
    >
      <Text title={t('recommended')}/>
      <ArticleList
        className={cls.recommendations}
        articles={articles}
        isLoading={isLoading}
        view={ArticleListView.GRID}
        openInNewWindow
      />
    </Column>
  )
})
