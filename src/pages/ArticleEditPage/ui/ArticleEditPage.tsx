import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ARTICLE_DETAILS_NAMESPACE } from 'shared/constants/i18n'
import { classNames } from 'shared/lib/common'
import { PageWrapper } from 'widgets/PageWrapper'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props
  const { t } = useTranslation(ARTICLE_DETAILS_NAMESPACE)
  const { id } = useParams<{id: string | undefined}>()

  return (
    <PageWrapper className={classNames('', {}, [className])}>
      {
        id ? (
          t('edit')
        ) : (
          t('createArticle')
        )
      }
    </PageWrapper>
  )
})

export default ArticleEditPage