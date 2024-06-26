import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui'
import { classNames } from '@/shared/lib/common'
import { LANGUAGE_EN, LANGUAGE_RU } from '@/shared/constants/i18n'

interface LangSwitcherProps {
  className?: string,
  shortLng?: boolean
}

export const LangSwitcher = memo(({ className, shortLng }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const changeLanguage = async () => {
    await i18n.changeLanguage(
      i18n.language === LANGUAGE_RU
        ? LANGUAGE_EN
        : LANGUAGE_RU
    )

  }

  return (
    <Button
      className={classNames('', {}, [className])}
      variant='textInverted'
      onClick={changeLanguage}
    >
      {t(shortLng ? 'shortLng' :  'translateButton')}
    </Button>
  )
})