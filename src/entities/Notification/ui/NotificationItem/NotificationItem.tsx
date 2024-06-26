import { memo } from 'react'
import { classNames } from '@/shared/lib/common'
import { AppLink, Card, Text } from '@/shared/ui'
import cls from './NotificationItem.module.scss'
import type { Notification } from '../../model/types/Notification'

interface NotificationItemProps {
  className?: string
  notification: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, notification } = props

  const content = (
    <Card
      className={classNames(cls.notificationItem, {}, [className])}
      variant='outlined'
    >
      <Text
        title={notification.title}
        text={notification.description}
      />
    </Card>
  )

  if (notification?.href) {
    return (
      <AppLink
        className={cls.link}
        to={notification.href}
        target='_blank'
      >
        {content}
      </AppLink>
    )
  }

  return content
})