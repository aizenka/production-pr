import { memo } from 'react'
import { classNames } from '@/shared/lib/common'
import { Card, Column, Row, Skeleton } from '@/shared/ui'
import { ArticleListView } from '../../../model/consts'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemSkeletonProps {
  className?: string,
  view: ArticleListView
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const { className, view } = props


  if (view === ArticleListView.LIST) {

    return (
      <div className={classNames(cls.articleListItem,
        {},
        [className, cls[view]]
      )}>
        <Card>
          <Column gap={8}>
            <Row
              align='between'
              vAlign='center'
            >
              <Row
                gap={8}
                vAlign='center'
              >
                <Skeleton
                  width={30}
                  height={30}
                  borderRadius={'50%'}
                />
                <Skeleton
                  width={150}
                  height={16}
                />
              </Row>
              <Skeleton
                width={120}
                height={16}
              />
            </Row>
            <Skeleton
              width={250}
              height={24}
            />
            <Skeleton
              width={100}
              height={16}
            />
            <Skeleton
              height={250}
            />
            <Row
              align='between'
              vAlign='center'
            >
              <Skeleton
                width={150}
                height={36}
              />
              <Skeleton
                width={120}
                height={16}
              />
            </Row>
          </Column>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames(cls.articleListItem,
      {},
      [className, cls[view]]
    )}>
      <Card>
        <Column gap={8}>
          <div className={cls.imageWrapper}>
            <Skeleton
              width={200}
              height={200}
              // borderRadius={'50%'}
              className={cls.img}
            />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton
              width={130}
              height={16}
            />
          </div>
          <Skeleton
            width={150}
            height={16}
          />
        </Column>
      </Card>
    </div>
  )
})