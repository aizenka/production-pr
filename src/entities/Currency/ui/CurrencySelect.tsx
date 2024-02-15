import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { PROFILE_PAGE_NAMESPACE } from 'shared/constants/i18n'
import { classNames } from 'shared/lib/common'
import { ListBox } from 'shared/ui'
import { Currency } from '../model/types/Currency'

interface CurrencySelectProps {
  className?: string
  readonly?: boolean
  value?: Currency
  onChange?: (value: Currency) => void
  translationNamespace?: string
}

const CurrencyOptions = (
  Object.entries(Currency).map(([value, content]) => ({ value, content }))
)

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly,
    translationNamespace = PROFILE_PAGE_NAMESPACE
  } = props
  const { t } = useTranslation(translationNamespace)

  const handleOnChange = useCallback((value: string) => {
    onChange && onChange(value as Currency)
  }, [onChange])


  return (
    <ListBox
      className={classNames('', {}, [className])}
      label={t('selectCurrency')}
      value={value}
      defaultValue={t('selectCurrency')}
      items={CurrencyOptions}
      onChange={handleOnChange}
      readonly={readonly}
    />
  )
})