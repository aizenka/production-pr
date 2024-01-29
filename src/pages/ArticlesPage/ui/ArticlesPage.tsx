import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ArticleList, ArticleListView, ArticlesViewSelector } from 'entities/Article'
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper'
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
  articlesPageActions,
  articlesPageReducer,
  getArticles
} from '../model/slice/articlesPageSlice'
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

  useInitialEffect(() => {
    dispatch(initArticlesPage())
  }, [])

  const onLoadArticles= useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleListNextPage())
    }
  }, [dispatch])

  const onChangeView = useCallback((view: ArticleListView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  return (
    <PageWrapper
      className={classNames(cls.articlesPage, {}, [className])}
      onScrollEnd={onLoadArticles}
    >
      <ArticlesViewSelector
        view={view}
        onChangeView={onChangeView}
      />
      <ArticleList
        articles={articles}
        view={view}
        isLoading={isLoading}
      />
    </PageWrapper>
  )
}

export default memo(ArticlesPage)