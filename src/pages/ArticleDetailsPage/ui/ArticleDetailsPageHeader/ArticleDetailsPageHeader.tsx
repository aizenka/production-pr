import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ARTICLE_DETAILS_NAMESPACE } from '@/shared/constants/i18n'
import { classNames } from '@/shared/lib/common'
import { Button } from '@/shared/ui/Button/Button'
import { getArticleDetailsData } from '@/entities/Article'
import { Row } from '@/shared/ui'
import { getRouteArticleEdit, getRouteArticles } from '@/shared/constants/router'
import { getCanEditArticle } from '../../selectors/article'
import cls from './ArticleDetailsPageHeader.module.scss'

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
    navigate(getRouteArticles())
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(getRouteArticleEdit(article!.id))
  }, [article, navigate])

  return (
    <Row
      className={classNames('', {}, [className])}
      align='between'
      vAlign='center'
    >
      <Button
        className={cls.backButton}
        variant='outlined'
        onClick={onBackToList}
      >
        {t('goBack')}
      </Button>
      {
        canEdit && (
          <Button
            className={cls.edit}
            variant='outlined'
            onClick={onEditArticle}
          >
            {t('edit')}
          </Button>
        )
      }
    </Row>
  )
})