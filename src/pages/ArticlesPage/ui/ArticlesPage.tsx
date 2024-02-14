import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { PageWrapper } from 'widgets/PageWrapper'
import { classNames } from 'shared/lib/common'
import { ArticleList } from 'entities/Article'
import { Column } from 'shared/ui'
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
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters'
import cls from './ArticlesPage.module.scss'

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
      <Column
        gap={24}
        style={{ width: '100%' }}
      >
        <ArticlesPageFilters />
        <ArticleList
          articles={articles}
          view={view}
          isLoading={isLoading}
        />
      </Column>
    </PageWrapper>
  )
}

export default memo(ArticlesPage)