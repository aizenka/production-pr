import { memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/common'
import CopyIcon from '@/shared/assets/icons/icon-copy.svg'
import { Button } from '../Button/Button'
import cls from './Code.module.scss'

interface CodeProps {
  className?: string,
  code: string
}

export const Code = memo(({ className, code }: CodeProps) => {

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(code)
  }, [code])

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button
        className={cls.copyBtn}
        onClick={onCopy}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>
        {code}
      </code>
    </pre>
  )
})