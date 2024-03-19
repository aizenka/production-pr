import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from '@/entities/Article'
import { classNames } from '@/shared/lib/common'
import { ARTICLE_DETAILS_NAMESPACE } from '@/shared/constants/i18n'
import { PageWrapper } from '@/widgets/PageWrapper'
import { Column } from '@/shared/ui'
import { ArticleRecommendationList } from '@/features/ArticleRecommendationList'
import { ArticleRating } from '@/features/ArticleRating'
import { useDynamicModuleLoader } from '@/shared/lib/hooks'
import type { ReducersList } from '@/shared/lib/hooks/useDynamicModuleLoader'
import { articleDetailsPageReducer } from '../model/slice'
import {
  ArticleDetailsPageHeader
} from './ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import {
  ArticleDetailsPageComments
} from './ArticleDetailsPageComments/ArticleDetailsPageComments'

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

  if (!id) {
    return <div>{t('articleNotFound')}</div>
  }

  return (
    <PageWrapper className={classNames('', {}, [className])}>
      <Column gap={24}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRating articleId={id}/>
        <ArticleRecommendationList />
        <ArticleDetailsPageComments id={id} />
      </Column>
    </PageWrapper>
  )
}

export default memo(ArticleDetailsPage)