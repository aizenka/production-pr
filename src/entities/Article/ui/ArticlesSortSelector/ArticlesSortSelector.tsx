import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ARTICLES_NAMESPACE } from 'shared/constants/i18n'
import { classNames } from 'shared/lib/common'
import { ListBox, Row } from 'shared/ui'
import { SortOrder } from 'shared/types'
import { ListBoxItem } from 'shared/ui/ListBox/ListBox'
import { ArticleSortField } from '../../model/types/Article'
import cls from './ArticlesSortSelector.module.scss'

interface ArticlesSortSelectorProps {
  className?: string,
  sort: ArticleSortField,
  order: SortOrder,
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticlesSortSelector = memo((props: ArticlesSortSelectorProps) => {
  const {
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort
  } = props
  const { t } = useTranslation(ARTICLES_NAMESPACE)

  const sortFieldOptions = useMemo<ListBoxItem<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED_AT,
      content: t('creationDate')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('title')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('views')
    }
  ], [t])

  const sortOrderOptions = useMemo<ListBoxItem<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('ascending')
    },
    {
      value: 'desc',
      content: t('descending')
    }
  ], [t])


  return (
    <Row
      className={classNames('', {}, [className])}
      gap={16}
    >
      <ListBox
        items={sortFieldOptions}
        triggerButtonClassName={cls.listBoxTriggerBtn}
        label={t('sortBy')}
        value={sort}
        onChange={onChangeSort}
      />
      <ListBox
        items={sortOrderOptions}
        triggerButtonClassName={cls.listBoxTriggerBtn}
        label={t('by')}
        value={order}
        onChange={onChangeOrder}
      />
    </Row>
  )
})