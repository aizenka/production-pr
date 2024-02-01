import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui'
import { classNames } from 'shared/lib/common'
import { ARTICLES_NAMESPACE } from 'shared/constants/i18n'
import { Article, ArticleListView } from '../../model/types/Article'
import { ArticleListItem, ArticleListItemSkeleton } from '../components'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string,
  articles: Article[],
  isLoading?: boolean,
  view?: ArticleListView
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

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles = [],
    view = ArticleListView.LIST,
    isLoading
  } = props
  const { t } = useTranslation(ARTICLES_NAMESPACE)

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        key={article.id}
        article={article}
        view={view}
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
    <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
      {
        articles.length > 0 && (
          articles.map(renderArticle)
        )
      }
      { isLoading && renderSkeletons(view) }
    </div>
  )
})