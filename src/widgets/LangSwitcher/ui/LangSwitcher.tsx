import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'
import { classNames } from 'shared/lib'
import { LANGUAGE_EN, LANGUAGE_RU } from 'constants/i18n'
import { ButtonVariant } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string,
  shortLng?: boolean
}

export const LangSwitcher = ({ className, shortLng }: LangSwitcherProps) => {
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
      variant={ButtonVariant.TEXT_INVERTED}
      onClick={changeLanguage}
    >
      {t(shortLng ? 'shortLng' :  'translateButton')}
    </Button>
  )
}