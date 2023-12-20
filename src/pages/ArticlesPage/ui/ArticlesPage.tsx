import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ARTICLE_PAGE_NAMESPACE } from 'shared/constants/i18n'
import { classNames } from 'shared/lib/common'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation(ARTICLE_PAGE_NAMESPACE)

  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      {t('articles')}
    </div>
  )
}

export default memo(ArticlesPage)