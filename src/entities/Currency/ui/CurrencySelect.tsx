import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/common'
import { Select } from 'shared/ui'
import { Currency } from '../model/types/Currency'

interface CurrencySelectProps {
  className?: string
  readonly?: boolean
  value?: Currency
  onChange?: (value: Currency) => void
}

const CurrencyOptions = (
  Object.entries(Currency).map(([value, content]) => ({ value, content }))
)

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readonly } = props
  const { t } = useTranslation()

  const handleOnChange = useCallback((value: string) => {
    onChange && onChange(value as Currency)
  }, [onChange])


  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('selectCurrency')}
      value={value}
      options={CurrencyOptions}
      onChange={handleOnChange}
      readonly={readonly}
    />
  )
})