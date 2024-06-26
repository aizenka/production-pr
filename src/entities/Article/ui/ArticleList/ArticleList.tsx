import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from '@/shared/ui'
import { classNames } from '@/shared/lib/common'
import { ARTICLES_NAMESPACE } from '@/shared/constants/i18n'
import { ArticleListItem, ArticleListItemSkeleton } from '../components'
import { ArticleListView } from '../../model/consts'
import cls from './ArticleList.module.scss'
import type { Article } from '../../model/types'

interface ArticleListProps {
  className?: string,
  articles: Article[],
  isLoading?: boolean,
  view?: ArticleListView,
  openInNewWindow?: boolean
}

const renderSkeletons = (view: ArticleListView) => {
  return new Array(view === ArticleListView.GRID ? 8 : 4)
    .fill(0)
    .map((_, index) => {
      return (
        <ArticleListItemSkeleton
          key={index}
          view={view}
        />
      )
    })
}

// TODO: refactor with virtualized list
export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles = [],
    view = ArticleListView.LIST,
    isLoading,
    openInNewWindow
  } = props
  const { t } = useTranslation(ARTICLES_NAMESPACE)

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        key={article.id}
        article={article}
        view={view}
        openInNewWindow={openInNewWindow}
      />
    )
  }

  if (!isLoading && !articles.length) {
    return (
      <div className={cls.emptyState}>
        <Text title={t('articlesNotFoundYet')} />
      </div>
    )
  }

  return (
    <div
      className={classNames(cls.articleList, {}, [className, cls[view]])}
      data-testid='ArticleList'
    >
      {
        articles.length > 0 && (
          articles.map(renderArticle)
        )
      }
      { isLoading && renderSkeletons(view) }
    </div>
  )
})