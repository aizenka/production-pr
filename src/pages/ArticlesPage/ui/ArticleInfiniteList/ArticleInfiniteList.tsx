import { memo } from 'react'
import { useSelector } from 'react-redux'
import { ArticleList } from '@/entities/Article'
import { classNames } from '@/shared/lib/common'
import {
  getArticlesPageLoading,
  getArticlesPageListView
} from '../../model/selectors/articlesPageSelectors'
import { getArticles } from '../../model/slice/articlesPageSlice'

interface ArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageLoading)
  const view = useSelector(getArticlesPageListView)

  return (
    <ArticleList
      className={classNames('', {}, [className])}
      articles={articles}
      view={view}
      isLoading={isLoading}
    />
  )
})