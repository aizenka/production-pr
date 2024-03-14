import type { ReactNode } from 'react'
import { Fragment } from 'react'
import { Menu } from '@headlessui/react'
import { classNames } from '@/shared/lib/common'
import type { DropdownDirection } from '@/shared/types/ui'
import { Button } from '../../../Button/Button'
import { AppLink } from '../../../AppLink/AppLink'
import cls from './Dropdown.module.scss'
import popupCls from '../../styles/popups.module.scss'

export interface DropdownItem {
  disabled?: boolean,
  content?: ReactNode,
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger: ReactNode,
  direction?: DropdownDirection
}

export const Dropdown = (props: DropdownProps) => {
  const {
    className,
    trigger,
    items,
    direction = 'bottom-left' // TODO: check floating-ui
  } = props

  return (
    <Menu
      as='div'
      className={classNames(cls.dropdown, {}, [className])}
    >
      <Menu.Button className={popupCls.triggerBtn}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.dropdownItems, {}, [popupCls[direction]])}>
        {
          items.map((item, index) => {
            const content = ({ active }: { active: boolean }) => (
              <Button
                className={classNames(cls.dropdownItem, { [popupCls.active]: active })}
                onClick={item?.onClick}
                disabled={item?.disabled}
              >
                {item.content}
              </Button>
            )

            if (item?.href) {
              return (
                <Menu.Item
                  key={index}
                  as={AppLink}
                  to={item.href}
                  disabled={item?.disabled}
                >
                  {content}
                </Menu.Item>
              )
            }

            return (
              <Menu.Item
                key={index}
                as={Fragment}
                disabled={item?.disabled}
              >
                {content}
              </Menu.Item>
            )
          })
        }
      </Menu.Items>
    </Menu>
  )
}