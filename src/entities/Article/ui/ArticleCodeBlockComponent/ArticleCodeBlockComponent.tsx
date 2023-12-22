import { memo } from 'react'
import { classNames } from 'shared/lib/common'
import cls from './ArticleCodeBlockComponent.module.scss'

interface ArticleCodeBlockComponentProps {
  className?: string
}

export const ArticleCodeBlockComponent = memo(
  ({ className }: ArticleCodeBlockComponentProps) => {
    return (
      <div className={classNames(cls.articleCodeBlockComponent, {}, [className])} />
    )
  })