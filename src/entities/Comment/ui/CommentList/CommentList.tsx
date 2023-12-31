import { Comment } from '../../model/types/Comment'
import { memo } from 'react'
import { classNames } from 'shared/lib/common'
import cls from './CommentList.module.scss'
import { useTranslation } from 'react-i18next'
import { COMMENTS_NAMESPACE } from 'shared/constants/i18n'
import { CommentCard } from '../CommentCard/CommentCard'
import { Skeleton, Text } from 'shared/ui'
import { TextAlign } from 'shared/ui/Text/Text'

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
    isLoading,
    error
  } = props
  const { t } = useTranslation(COMMENTS_NAMESPACE)

  const renderCommentsLoading = () => {
    if (isLoading) {
      return (
        <>
          {
            [1, 2, 3].map((index) => {
              return (
                <div
                  key={index}
                  className={cls.commentSkeleton}
                >
                  <div className={cls.contentWrapper}>
                    <div className={cls.userInfo}>
                      <Skeleton width={30} height={30} borderRadius={'50%'} />
                      <Skeleton width={100} height={16} />
                    </div>
                    <Skeleton width={'100%'} height={50} />
                  </div>
                </div>
              )
            })
          }
        </>
      )
    }
  }

  return (
    <div className={classNames(cls.commentList, {}, [className])}>
      <Text title={t('comments')} />
      <div className={cls.commentsWrapper}>
        {renderCommentsLoading()}
        {
          comments?.length
            ? comments.map(comment => (
              <CommentCard
                key={comment.id}
                comment={comment}
              />
            ))
            : error && (
              <Text
                text={t('commentsNotFound')}
                align={TextAlign.CENTER}
              />
            )
        }
      </div>
    </div>
  )
})