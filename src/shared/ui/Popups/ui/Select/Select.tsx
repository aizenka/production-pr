import { Fragment, memo } from 'react'
import { Listbox } from '@headlessui/react'
import { classNames } from '@/shared/lib/common'
import { Button } from '../../../Button/Button'
import { Row } from '../../../Flex'
import cls from './Select.module.scss'
import popupCls from '../../styles/popups.module.scss'
import type { DropdownDirection } from '@/shared/types/ui'
import type { ReactNode } from 'react'

export interface SelectItem<T extends string> {
  value: T,
  content: ReactNode,
  disabled?: boolean
}

interface SelectProps<T extends string> {
  className?: string,
  triggerButtonClassName?: string
  items?: SelectItem<T>[]
  value?: T,
  defaultValue?: string
  label?: string
  onChange?: (value: T) => void
  direction?: DropdownDirection
  readonly?: boolean,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typedMemo: <Component extends React.FC<any>>(component: Component,
  compare?: (
    prevProps: React.ComponentPropsWithoutRef<Component>,
    newProps: React.ComponentPropsWithoutRef<Component>
  ) => boolean
) => Component = memo

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
  const {
    className,
    triggerButtonClassName,
    items,
    value,
    defaultValue,
    label,
    onChange,
    direction = 'bottom-left', // TODO: check floating-ui
    readonly = false
  } = props

  return (
    <Row
      gap={8}
      vAlign='center'
    >
      {
        label && (
          <span>
            {`${label}>`}
          </span>
        )
      }
      <Listbox
        className={classNames(cls.select, { [cls.readonly]: !!readonly }, [className])}
        as='div'
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        {/* TODO: fix button 'as fragment' behavior */}
        <Listbox.Button
          className={popupCls.triggerBtn}
        >
          <Button
            className={triggerButtonClassName}
            variant='outlined'
            disabled={readonly}
          >
            {value ?? defaultValue}
          </Button>
        </Listbox.Button>
        <Listbox.Options
          className={classNames(cls.options, {}, [popupCls[direction]])}
        >
          {
            items?.map((item) => (
              <Listbox.Option
                as={Fragment}
                key={item.value}
                value={item.value}
                disabled={item.disabled}
              >
                {({ active, selected }) => (
                  <li
                    className={classNames(cls.item, {
                      [popupCls.active]: active,
                      [cls.selected]: selected,
                      [cls.disabled]: item?.disabled
                    },
                    [])}
                  >
                    {item.content}
                  </li>
                )}
              </Listbox.Option>
            ))
          }
        </Listbox.Options>
      </Listbox>
    </Row>
  )
})