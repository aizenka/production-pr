import { memo, ReactNode, useCallback } from 'react'
import { classNames } from 'shared/lib/common'
import { Card, CardVariant } from '../Card/Card'
import cls from './Tabs.module.scss'

export interface TabItem<T extends string> {
  key: T
  content: ReactNode
}

interface TabsProps<T extends string> {
  className?: string,
  tabs: TabItem<T>[]
  selectedKey: string,
  onTabClick: (activeTab: TabItem<T>) => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typedMemo: <Component extends React.FC<any>>(component: Component,
  compare?: (
    prevProps: React.ComponentPropsWithoutRef<Component>,
    newProps: React.ComponentPropsWithoutRef<Component>
  ) => boolean
) => Component = memo

export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
  const { className, tabs = [], selectedKey, onTabClick } = props

  const onClickTab = useCallback((tab: TabItem<T>) => () => {
    onTabClick(tab)
  }, [onTabClick])

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {
        tabs.map(tab => {
          return (
            <Card
              key={tab.key}
              className={cls.tab}
              variant={
                tab.key === selectedKey ? CardVariant.NORMAL : CardVariant.OUTLINED
              }
              onClick={onClickTab(tab)}
            >
              {tab.content}
            </Card>
          )
        })
      }
    </div>
  )
})