import {
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState
} from 'react'
import { classNames } from 'shared/lib'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string,
  autofocus?: boolean,
  value?: string,
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
    ...extraProps
  } = props

  const inputRef = useRef<HTMLInputElement>()
  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      inputRef.current.focus()
    }
  }, [autofocus])

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

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
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
          value={value}
          onChange={onChangeValue}
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...extraProps}
        />
        {
          isFocused && (
            <span
              className={cls.caret}
              style={{ left: `${caretPosition * 7}px` }}
            />
          )
        }
      </div>
    </div>
  )
})