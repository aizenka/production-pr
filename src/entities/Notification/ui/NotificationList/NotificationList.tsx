import { memo } from 'react'
import { classNames } from '@/shared/lib/common'
import { Column, Skeleton } from '@/shared/ui'
import { useNotifications } from '../../api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'

interface NotificationListProps {
  className?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props
  const { data: notifications, isLoading } = useNotifications(undefined, {
    pollingInterval: 10000
  })

  if (isLoading) {
    return (
      <Column
        className={classNames('', {}, [className])}
        gap={16}
      >
        <Skeleton width='100%' borderRadius='8px' height='80px' />
        <Skeleton width='100%' borderRadius='8px' height='80px' />
        <Skeleton width='100%' borderRadius='8px' height='80px' />
      </Column>
    )
  }

  return (
    <Column
      className={classNames('', {}, [className])}
      gap={16}
    >
      {
        notifications?.map((notification) => {
          return (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          )
        })
      }
    </Column>
  )
})