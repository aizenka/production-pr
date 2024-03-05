import { memo } from 'react'
import { classNames } from 'shared/lib/common'
import { Code } from 'shared/ui'
import type { ArticleCodeBlock } from '../../../model/types/Article'
import cls from './ArticleCodeBlockComponent.module.scss'

interface ArticleCodeBlockComponentProps {
  className?: string,
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(
  ({ className, block }: ArticleCodeBlockComponentProps) => {
    return (
      <div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
        <Code code={block.code}/>
      </div>
    )
  })