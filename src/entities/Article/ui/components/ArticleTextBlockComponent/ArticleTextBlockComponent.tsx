import { memo } from 'react'
import { classNames } from 'shared/lib/common'
import { Text } from 'shared/ui'
import { ArticleTextBlock } from '../../../model/types/Article'
import cls from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
  className?: string,
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => {
    return (
      <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
        {
          block.title && (
            <Text title={block.title} />
          )
        }
        <div className={cls.paragraphsWrapper}>
          {
            block.paragraphs.map((paragraph, index) => {
              return (
                <Text
                  key={index}
                  text={paragraph}
                />
              )
            })
          }
        </div>
      </div>
    )
  })