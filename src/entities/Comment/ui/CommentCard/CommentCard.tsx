import { memo } from 'react'
import { classNames } from '@/shared/lib/common'
import { AppLink, Avatar, Column, Row, Text } from '@/shared/ui'
import { getRouteProfile } from '@/shared/constants/router'
import cls from './CommentCard.module.scss'
import type { Comment } from '../../model/types/Comment'

interface CommentCardProps {
  className?: string,
  comment: Comment
}

export const CommentCard = memo((props: CommentCardProps) => {
  const {
    className,
    comment
  } = props

  return (
    <Column
      gap={16}
      className={classNames(cls.commentCard, {}, [className])}
    >
      <AppLink
        to={getRouteProfile(comment.user.id)}
      >
        <Row
          gap={8}
          vAlign='center'
        >
          {
            !!comment.user.avatarUrl && (
              <Avatar
                src={comment.user.avatarUrl}
                size={30}
                alt='comment user avatar'
              />
            )
          }
          <Text text={comment.user.username} />
        </Row>
      </AppLink>
      <Text
        text={comment.text}
        data-testid='CommentCard'
      />
    </Column>
  )
})