import { memo } from 'react'
import { classNames } from 'shared/lib/common'
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
  return new Array(view === ArticleListView.GRID ? 8 : 3)
    .fill(0)
    .map(index => {
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

  if (isLoading) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        {renderSkeletons(view)}
      </div>
    )
  }

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        key={article.id}
        article={article}
        view={view}
      />
    )
  }

  return (
    <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
      {
        articles.length > 0
          ? (
            articles.map(renderArticle)
          )
          : null
      }
    </div>
  )
})