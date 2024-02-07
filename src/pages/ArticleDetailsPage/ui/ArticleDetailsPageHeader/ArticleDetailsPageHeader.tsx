import { getCanEditArticle } from '../../selectors/article'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { ARTICLE_DETAILS_NAMESPACE } from 'shared/constants/i18n'
import { classNames } from 'shared/lib/common'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import cls from './ArticleDetailsPageHeader.module.scss'
import { getArticleDetailsData } from 'entities/Article'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props
  const { t } = useTranslation(ARTICLE_DETAILS_NAMESPACE)
  const navigate = useNavigate()
  const article = useSelector(getArticleDetailsData)
  const canEdit = useSelector(getCanEditArticle)

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.articleDetails}${article?.id}/edit`)
  }, [article?.id, navigate])

  return (
    <div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
      <Button
        className={cls.backButton}
        variant={ButtonVariant.OUTLINED}
        onClick={onBackToList}
      >
        {t('goBack')}
      </Button>
      {
        canEdit && (
          <Button
            className={cls.edit}
            variant={ButtonVariant.OUTLINED}
            onClick={onEditArticle}
          >
            {t('edit')}
          </Button>
        )
      }
    </div>
  )
})