import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/common'
import { COMMENTS_NAMESPACE } from '@/shared/constants/i18n'
import { Column, Row, Skeleton, Text } from '@/shared/ui'
import { TextAlign } from '@/shared/ui/Text/Text'
import { CommentCard } from '../CommentCard/CommentCard'
import cls from './CommentList.module.scss'
import type { Comment } from '../../model/types/Comment'

interface CommentListProps {
  className?: string,
  comments?: Comment[],
  isLoading?: boolean,
  error? : string
}

export const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    isLoading
    // error
  } = props
  const { t } = useTranslation(COMMENTS_NAMESPACE)

  if (isLoading) {
    return (
      <>
        {
          new Array(3).fill(0).map((_, index) => {
            return (
              <div
                key={index}
                className={cls.commentSkeleton}
              >
                <Column gap={16}>
                  <Row
                    gap={8}
                    vAlign='center'
                  >
                    <Skeleton width={30} height={30} borderRadius={'50%'} />
                    <Skeleton width={100} height={16} />
                  </Row>
                  <Skeleton width={'100%'} height={50} />
                </Column>
              </div>
            )
          })
        }
      </>
    )
  }

  return (
    <Column
      className={classNames('', {}, [className])}
      gap={16}
    >
      {
        comments?.length
          ? comments.map(comment => (
            <CommentCard
              key={comment.id}
              comment={comment}
            />
          ))
          : (
            <Text
              text={t('commentsNotFound')}
              align={TextAlign.CENTER}
            />
          )
      }
    </Column>
  )
})