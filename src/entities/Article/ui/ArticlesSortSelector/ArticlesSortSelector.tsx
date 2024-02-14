import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ARTICLES_NAMESPACE } from 'shared/constants/i18n'
import { classNames } from 'shared/lib/common'
import { Row, Select } from 'shared/ui'
import { SelectOption } from 'shared/ui/Select/Select'
import { SortOrder } from 'shared/types'
import { ArticleSortField } from '../../model/types/Article'

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

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
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

  const sortOrderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
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
        options={sortFieldOptions}
        label={t('sortBy')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={sortOrderOptions}
        label={t('by')}
        value={order}
        onChange={onChangeOrder}
      />
    </Row>
  )
})