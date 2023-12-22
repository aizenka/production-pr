import { memo } from 'react'
import { classNames } from 'shared/lib/common'
import cls from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
  className?: string
}

export const ArticleImageBlockComponent = memo(
  ({ className }: ArticleImageBlockComponentProps) => {
    return (
      <div className={classNames(cls.articleImageBlockComponent, {}, [className])} />
    )
  })