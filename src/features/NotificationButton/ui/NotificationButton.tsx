import { memo, useCallback, useState } from 'react'
import { Drawer, Popover } from 'shared/ui'
import { classNames } from 'shared/lib/common'
import { NotificationList } from 'entities/Notification'
import { Button, Icon } from 'shared/ui'
import NotificationsIcon from 'shared/assets/icons/icon-notifications.svg'
import { AnimationProvider } from 'shared/lib/components'
import { useDetectMobileScreen } from 'shared/lib/hooks'
import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const isMobile = useDetectMobileScreen()

  const onOpenDrawer = useCallback(() => {
    setIsDrawerOpen(true)
  }, [])

  const onCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false)
  }, [])

  const trigger = (
    <Button onClick={isMobile ? onOpenDrawer : undefined}>
      <Icon
        Svg={NotificationsIcon}
        inverted
      />
    </Button>
  )

  return (
    <>
      {
        isMobile ? (
          <>
            {trigger}
            <AnimationProvider>
              <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer}>
                <NotificationList />
              </Drawer>
            </AnimationProvider>
          </>
        ) : (
          <Popover
            className={classNames('', {}, [className])}
            trigger={trigger}
            unmount={false}
            direction='bottom-right'
          >
            <NotificationList className={cls.notificationList} />
          </Popover>
        )
      }
    </>
  )
})