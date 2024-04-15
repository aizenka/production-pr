import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ARTICLES_NAMESPACE } from '@/shared/constants/i18n'
import { classNames } from '@/shared/lib/common'
import { Select, Row } from '@/shared/ui'
import { ArticleSortField } from '@/entities/Article'
import cls from './ArticlesSortSelector.module.scss'
import type { SortOrder } from '@/shared/types'
import type { SelectItem } from '@/shared/ui/Popups'

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

  const sortFieldOptions = useMemo<SelectItem<ArticleSortField>[]>(() => [
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

  const sortOrderOptions = useMemo<SelectItem<SortOrder>[]>(() => [
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
      <Select
        items={sortFieldOptions}
        triggerButtonClassName={cls.selectTriggerBtn}
        label={t('sortBy')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        items={sortOrderOptions}
        triggerButtonClassName={cls.selectTriggerBtn}
        label={t('by')}
        value={order}
        onChange={onChangeOrder}
      />
    </Row>
  )
})