import { memo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PageWrapper } from '@/widgets/PageWrapper'
import { classNames } from '@/shared/lib/common'
import { Column } from '@/shared/ui'
import {
  useAppDispatch,
  useDynamicModuleLoader,
  useInitialEffect
} from '@/shared/lib/hooks'
import { fetchArticleListNextPage, initArticlesPage } from '../model/services'
import { articlesPageReducer } from '../model/slice/articlesPageSlice'
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters'
import { ArticleInfiniteList } from './ArticleInfiniteList/ArticleInfiniteList'
import cls from './ArticlesPage.module.scss'
import type { ReducersList } from '@/shared/lib/hooks/useDynamicModuleLoader'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  useDynamicModuleLoader(reducers, { removeAfterUnmount: false })
  const dispatch = useAppDispatch()
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
      data-testid='ArticlesPage'
    >
      <Column gap={24}>
        <ArticlesPageFilters />
        <ArticleInfiniteList />
      </Column>
    </PageWrapper>
  )
}

export default memo(ArticlesPage)