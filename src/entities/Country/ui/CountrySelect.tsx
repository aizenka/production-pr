import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/common'
import { Select } from 'shared/ui'
import { Country } from '../model/types/Country'

interface CountrySelectProps {
  className?: string
  readonly?: boolean
  value?: Country
  onChange?: (value: Country) => void
}

const CountryOptions = (
  Object.entries(Country).map(([value, content]) => ({ value, content }))
)

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props
  const { t } = useTranslation()

  const handleOnChange = useCallback((value: string) => {
    onChange && onChange(value as Country)
  }, [onChange])


  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('selectCountry')}
      value={value}
      options={CountryOptions}
      onChange={handleOnChange}
      readonly={readonly}
    />
  )
})