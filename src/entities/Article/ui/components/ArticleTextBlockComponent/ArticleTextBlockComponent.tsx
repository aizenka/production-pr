import { memo } from 'react'
import { classNames } from 'shared/lib/common'
import { Column, Text } from 'shared/ui'
import type { ArticleTextBlock } from '../../../model/types/Article'

interface ArticleTextBlockComponentProps {
  className?: string,
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { className, block } = props

  return (
    <Column
      className={classNames('', {}, [className])}
      gap={16}
    >
      {
        block.title && (
          <Text title={block.title} />
        )
      }
      <Column gap={8}>
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
      </Column>
    </Column>
  )
})