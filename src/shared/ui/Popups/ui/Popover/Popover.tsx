import type { ReactNode } from 'react'
import { memo } from 'react'
import { Popover as HPopover } from '@headlessui/react'
import { classNames } from '@/shared/lib/common'
import type { DropdownDirection } from '@/shared/types/ui'
import cls from './Popover.module.scss'
import popupCls from '../../styles/popups.module.scss'

interface PopoverProps {
  className?: string
  trigger: ReactNode
  direction?: DropdownDirection
  children?: ReactNode
  unmount?: boolean
}

export const Popover = memo((props: PopoverProps) => {
  const {
    className,
    trigger,
    direction = 'botton-left',
    children,
    unmount = true
  } = props

  return (
    <HPopover className={classNames(cls.popover, {}, [className])}>
      <HPopover.Button
        as='div'
        className={popupCls.triggerBtn}
      >
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        unmount={unmount}
        className={classNames(cls.popoverItems, {}, [popupCls[direction]])}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  )
})