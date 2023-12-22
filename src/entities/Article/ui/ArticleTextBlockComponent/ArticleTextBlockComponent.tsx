import { memo } from 'react'
import { classNames } from 'shared/lib/common'
import cls from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
  className?: string
}

export const ArticleTextBlockComponent = memo(
  ({ className }: ArticleTextBlockComponentProps) => {
    return (
      <div className={classNames(cls.articleTextBlockComponent, {}, [className])} />
    )
  })