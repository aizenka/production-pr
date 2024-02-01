import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ArticleList } from 'entities/Article'
import { PageWrapper } from 'widgets/PageWrapper'
import { classNames } from 'shared/lib/common'
import {
  useAppDispatch,
  useDynamicModuleLoader,
  useInitialEffect
} from 'shared/lib/hooks'
import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader'
import {
  getArticlesPageListView,
  getArticlesPageLoading
} from '../model/selectors/articlesPageSelectors'
import { fetchArticleListNextPage, initArticlesPage } from '../model/services'
import {
  articlesPageReducer,
  getArticles
} from '../model/slice/articlesPageSlice'
import cls from './ArticlesPage.module.scss'
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters'
import { useSearchParams } from 'react-router-dom'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  useDynamicModuleLoader(reducers, { removeAfterUnmount: false })
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageLoading)
  const view = useSelector(getArticlesPageListView)
  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  }, [])

  const onLoadArticles= useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleListNextPage())
    }
  }, [dispatch])

  return (
    <PageWrapper
      className={classNames(cls.articlesPage, {}, [className])}
      onScrollEnd={onLoadArticles}
    >
      <ArticlesPageFilters />
      <ArticleList
        articles={articles}
        view={view}
        isLoading={isLoading}
      />
    </PageWrapper>
  )
}

export default memo(ArticlesPage)