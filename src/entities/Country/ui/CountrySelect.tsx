import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { PROFILE_PAGE_NAMESPACE } from 'shared/constants/i18n'
import { classNames } from 'shared/lib/common'
import { Select } from 'shared/ui'
import { Country } from '../model/types/Country'

interface CountrySelectProps {
  className?: string
  readonly?: boolean
  value?: Country
  onChange?: (value: Country) => void
  translationNamespace?: string
}

const CountryOptions = (
  Object.entries(Country).map(([value, content]) => ({ value, content }))
)

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly,
    translationNamespace = PROFILE_PAGE_NAMESPACE
  } = props
  const { t } = useTranslation(translationNamespace)

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