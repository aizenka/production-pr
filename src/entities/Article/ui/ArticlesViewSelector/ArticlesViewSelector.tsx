import { memo } from 'react'
import { ArticleListView } from '../../model/types/Article'
import { classNames } from 'shared/lib/common'
import GridViewIcon from 'shared/assets/icons/icon-articles-grid-view.svg'
import ListViewIcon from 'shared/assets/icons/icon-articles-list-view.svg'
import cls from './ArticlesViewSelector.module.scss'
import { Button, Icon } from 'shared/ui'

interface ArticlesViewSelectorProps {
  className?: string,
  view: ArticleListView,
  onChangeView?: (view: ArticleListView) => void
}

const VIEW_TYPES = [
  {
    view: ArticleListView.GRID,
    Icon: GridViewIcon
  },
  {
    view: ArticleListView.LIST,
    Icon: ListViewIcon
  }
]

export const ArticlesViewSelector = memo((props: ArticlesViewSelectorProps) => {
  const { className, view: currentView, onChangeView } = props

  const handleChangeView = (newView: ArticleListView) => () => {
    onChangeView && onChangeView(newView)
  }

  return (
    <div className={classNames(cls.articlesViewSelector, {}, [className])}>
      {
        VIEW_TYPES.map(viewType => {
          return (
            <Button
              key={viewType.view}
              onClick={handleChangeView(viewType.view)}
            >
              <Icon
                className={classNames('',
                  { [cls.notSelected]: viewType.view !== currentView }
                )}
                Svg={viewType.Icon}
              />
            </Button>
          )
        })
      }
    </div>
  )
})