import { Fragment, memo, ReactNode } from 'react'
import { Listbox as HListbox } from '@headlessui/react'
import { classNames } from 'shared/lib/common'
import { Button, ButtonVariant } from '../Button/Button'
import { Row } from '../Flex'
import cls from './ListBox.module.scss'

export interface ListBoxItem<T extends string> {
  value: T,
  content: ReactNode,
  disabled?: boolean
}

type DropdownDirection = 'top' | 'botton'


interface ListBoxProps<T extends string> {
  className?: string,
  triggerButtonClassName?: string
  items?: ListBoxItem<T>[]
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

export const ListBox = typedMemo(<T extends string>(props: ListBoxProps<T>) => {
  const {
    className,
    triggerButtonClassName,
    items,
    value,
    defaultValue,
    label,
    onChange,
    direction = 'bottom', // TODO: check floating-ui
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
      <HListbox
        className={classNames(cls.listBox, { [cls.readonly]: !!readonly }, [className])}
        as='div'
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        {/* TODO: fix button 'as fragment' behavior */}
        <HListbox.Button
          className={cls.trigger}
        >
          <Button
            className={triggerButtonClassName}
            variant={ButtonVariant.OUTLINED}
            disabled={readonly}
          >
            {value ?? defaultValue}
          </Button>
        </HListbox.Button>
        <HListbox.Options
          className={classNames(cls.options, {}, [cls[direction]])}
        >
          {
            items?.map((item) => (
              <HListbox.Option
                as={Fragment}
                key={item.value}
                value={item.value}
                disabled={item.disabled}
              >
                {({ active, selected }) => (
                  <li
                    className={classNames(cls.item, {
                      [cls.active]: active,
                      [cls.selected]: selected,
                      [cls.disabled]: item?.disabled
                    },
                    [])}
                  >
                    {item.content}
                  </li>
                )}
              </HListbox.Option>
            ))
          }
        </HListbox.Options>
      </HListbox>
    </Row>
  )
})