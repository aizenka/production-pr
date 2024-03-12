import { memo } from 'react'
import { Popover } from 'shared/ui'
import { classNames } from 'shared/lib/common'
import { NotificationList } from 'entities/Notification'
import { Button, Icon } from 'shared/ui'
import NotificationsIcon from 'shared/assets/icons/icon-notifications.svg'
import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props

  return (
    <Popover
      className={classNames('', {}, [className])}
      trigger={(
        <Button>
          <Icon
            Svg={NotificationsIcon}
            inverted
          />
        </Button>
      )}
      unmount={false}
      direction='bottom-right'
    >
      <NotificationList className={cls.notificationList} />
    </Popover>
  )
})