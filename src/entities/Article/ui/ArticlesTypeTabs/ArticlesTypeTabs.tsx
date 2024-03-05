import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/common'
import { Tabs } from 'shared/ui'
import type { TabItem } from 'shared/ui/Tabs/Tabs'
import { ARTICLES_NAMESPACE } from 'shared/constants/i18n'
import { ArticleType } from '../../model/consts'

interface ArticlesTypeTabsProps {
  className?: string,
  selectedType: ArticleType,
  onChangeType: (type: TabItem<ArticleType>) => void
}

export const ArticlesTypeTabs = memo((props: ArticlesTypeTabsProps) => {
  const { className, selectedType, onChangeType } = props
  const { t } = useTranslation(ARTICLES_NAMESPACE)

  const tabs = useMemo<TabItem<ArticleType>[]>(() => [
    {
      key: ArticleType.ALL,
      content: t('allArticles')
    },
    {
      key: ArticleType.IT,
      content: t('IT')
    },
    {
      key: ArticleType.ECONOMICS,
      content: t('economics')
    },
    {
      key: ArticleType.SCIENCE,
      content: t('science')
    }
  ], [t])

  return (
    <Tabs
      className={classNames('', {}, [className])}
      tabs={tabs}
      onTabClick={onChangeType}
      selectedKey={selectedType}
    />
  )
})