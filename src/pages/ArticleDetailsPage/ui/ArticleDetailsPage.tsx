import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ARTICLE_PAGE_NAMESPACE } from 'shared/constants/i18n'
import { classNames } from 'shared/lib/common'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation(ARTICLE_PAGE_NAMESPACE)

  return (
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      {t('article')}
    </div>
  )
}

export default memo(ArticleDetailsPage)