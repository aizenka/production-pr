import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ArticleList, ArticleListView, ArticlesViewSelector } from 'entities/Article'
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
import { fetchArticleList } from '../model/services'
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
  useDynamicModuleLoader(reducers)
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageLoading)
  const view = useSelector(getArticlesPageListView)

  useInitialEffect(() => {
    dispatch(fetchArticleList())
    dispatch(articlesPageActions.initState())
  }, [])

  const onChangeView = useCallback((view: ArticleListView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      <ArticlesViewSelector
        view={view}
        onChangeView={onChangeView}
      />
      <ArticleList
        articles={articles}
        view={view}
        isLoading={isLoading}
      />
    </div>
  )
}

export default memo(ArticlesPage)