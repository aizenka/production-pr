import { memo } from 'react'
import { ArticleDetails } from 'entities/Article'
import { classNames } from 'shared/lib/common'
import cls from './ArticleDetailsPage.module.scss'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ARTICLE_DETAILS_NAMESPACE } from 'shared/constants/i18n'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation(ARTICLE_DETAILS_NAMESPACE)
  const { id } = useParams<{ id: string }>()

  return (
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      {
        !id ? (
          <div>{t('articleNotFound')}</div>
        ) : (
          <ArticleDetails id={id} />
        )
      }
    </div>
  )
}

export default memo(ArticleDetailsPage)