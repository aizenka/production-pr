import { ChangeEvent, memo, useMemo } from 'react'
import { classNames } from 'shared/lib/common'
import { Row } from '../Flex'
import cls from './Select.module.scss'

export interface SelectOption<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string,
  readonly?: boolean
  label?: string,
  options?: SelectOption<T>[]
  value?: T,
  onChange?: (value: T) => void
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
    readonly,
    label,
    options,
    value,
    onChange
  } = props

  const optionList = useMemo(() => {
    return options?.map(opt => {
      return (
        <option
          className={cls.option}
          key={opt.value}
          value={opt.value}
        >
          {opt.content}
        </option>
      )
    })
  }, [options])

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e.target.value as T)
  }

  return (
    <Row
      className={classNames('', {}, [className])}
      gap={8}
    >
      {
        label && (
          <span className={cls.label}>
            {`${label}>`}
          </span>
        )
      }
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={handleOnChange}
      >
        {optionList}
      </select>
    </Row>
  )
})