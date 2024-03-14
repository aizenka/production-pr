import type {
  InputHTMLAttributes,
  MutableRefObject
} from 'react'
import {
  memo,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { classNames } from '@/shared/lib/common'
import type { ClsMods } from '@/shared/lib/common/classNames/classNames'
import { Row } from '../Flex'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
  className?: string,
  autofocus?: boolean,
  value?: string | number,
  readonly?: boolean,
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...extraProps
  } = props

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>
  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      inputRef.current.focus()
    }
  }, [autofocus])

  const isCaretVisible = useMemo(() => {
    return isFocused && !readonly
  }, [isFocused, readonly])

  const onFocus = () => {
    setIsFocused(true)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = (e: any) => {
    if (isFocused) {
      setCaretPosition(e.target.selectionStart)
    }
  }

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const mods:ClsMods = {
    [cls.readonly]: !!readonly
  }

  return (
    <Row
      className={classNames('', mods, [className])}
      gap={8}
    >
      {
        placeholder && (
          <div>
            {`${placeholder}>`}
          </div>
        )
      }
      <div className={cls.caretWrapper}>
        <input
          ref={inputRef}
          className={cls.input}
          readOnly={readonly}
          value={value}
          onChange={onChangeValue}
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...extraProps}
        />
        {
          isCaretVisible && (
            <span
              className={cls.caret}
              style={{ left: `${caretPosition * 7}px` }}
            />
          )
        }
      </div>
    </Row>
  )
})