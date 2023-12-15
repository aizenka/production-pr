import { ChangeEvent, memo, useMemo } from 'react'
import { classNames } from 'shared/lib/common'
import cls from './Select.module.scss'

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string,
  readonly?: boolean
  label?: string,
  options?: SelectOption[]
  value?: string,
  onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
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
    onChange && onChange(e.target.value)
  }

  return (
    <div className={classNames(cls.selectWrapper, {}, [className])}>
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
    </div>
  )
})