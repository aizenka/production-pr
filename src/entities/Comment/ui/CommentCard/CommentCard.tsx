import { memo } from 'react'
import { classNames } from 'shared/lib/common'
import { AppLink, Avatar, Text } from 'shared/ui'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Comment } from '../../model/types/Comment'
import cls from './CommentCard.module.scss'

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
    <div className={classNames(cls.commentCard, {}, [className])}>
      <div className={cls.contentWrapper}>
        <AppLink
          to={`${RoutePath.profile}${comment.user.id}`}
          className={cls.userInfo}
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
        </AppLink>
        <Text text={comment.text} />
      </div>

    </div>
  )
})