import { memo } from 'react'
import { classNames } from '@/shared/lib/common'
import { AppLink, Card, Text } from '@/shared/ui'
import { CardVariant } from '@/shared/ui/Card/Card'
import type { Notification } from '../../model/types/Notification'
import cls from './NotificationItem.module.scss'

interface NotificationItemProps {
  className?: string
  notification: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, notification } = props

  const content = (
    <Card
      className={classNames(cls.notificationItem, {}, [className])}
      variant={CardVariant.OUTLINED}
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