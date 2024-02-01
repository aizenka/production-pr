import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  ArticleListView,
  ArticleSortField,
  ArticlesSortSelector,
  ArticlesTypeTabs,
  ArticlesViewSelector,
  ArticleType
} from 'entities/Article'
import { classNames } from 'shared/lib/common'
import { useAppDispatch, useDebounce } from 'shared/lib/hooks'
import { Card, Input } from 'shared/ui'
import { ARTICLES_NAMESPACE } from 'shared/constants/i18n'
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList'
import {
  getArticlesPageListView,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSelectedType,
  getArticlesPageSort
} from '../../model/selectors/articlesPageSelectors'
import { articlesPageActions } from '../../model/slice/articlesPageSlice'
import { SortOrder } from 'shared/types'
import { TabItem } from 'shared/ui/Tabs/Tabs'
import cls from './ArticlesPageFilters.module.scss'

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props
  const { t } = useTranslation(ARTICLES_NAMESPACE)
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageListView)
  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)
  const search = useSelector(getArticlesPageSearch)
  const selectedType = useSelector(getArticlesPageSelectedType)

  const resetPageNum = useCallback(() => {
    dispatch(articlesPageActions.setPage(1))
  }, [dispatch])

  const fetchData = useCallback(() => {
    resetPageNum()
    dispatch(fetchArticleList({ replace: true }))
  }, [dispatch, resetPageNum])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback((view: ArticleListView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  const onChangeOrder = useCallback((order: SortOrder) => {
    dispatch(articlesPageActions.setOrder(order))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSort = useCallback((sort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(sort))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesPageActions.setSearch(search))
    debouncedFetchData()
  }, [dispatch, debouncedFetchData])

  const onChangeTab = useCallback((tab: TabItem<ArticleType>) => {
    dispatch(articlesPageActions.setSelectedType(tab.key))
    fetchData()
  }, [dispatch, fetchData])

  return (
    <div className={classNames(cls.articlesPageFilters, {}, [className])}>
      <div className={cls.sortBlock}>
        <ArticlesSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticlesViewSelector
          view={view}
          onChangeView={onChangeView}
        />
      </div>
      <Card className={cls.searchWrapper}>
        <Input
          placeholder={t('search')}
          value={search}
          onChange={onChangeSearch}
        />
      </Card>
      <ArticlesTypeTabs
        selectedType={selectedType}
        onChangeType={onChangeTab}
      />
    </div>
  )
})