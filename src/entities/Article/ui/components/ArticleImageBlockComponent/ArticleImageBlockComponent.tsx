import { memo } from 'react'
import { classNames } from '@/shared/lib/common'
import { Text } from '@/shared/ui'
import { TextAlign } from '@/shared/ui/Text/Text'
import cls from './ArticleImageBlockComponent.module.scss'
import type { ArticleImageBlock } from '../../../model/types/Article'

interface ArticleImageBlockComponentProps {
  className?: string,
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => {
    return (
      <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
        <img
          className={cls.articleImage}
          src={block.src}
          alt={block.title || 'article block image'}
        />
        {
          block.title && (
            <Text
              text={block.title}
              align={TextAlign.CENTER}
            />
          )
        }
      </div>
    )
  })