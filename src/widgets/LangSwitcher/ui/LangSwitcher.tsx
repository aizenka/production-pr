import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'
import { classNames } from 'shared/lib'
import { LANGUAGE_EN, LANGUAGE_RU } from 'constants/i18n'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    i18n.changeLanguage(
      i18n.language === LANGUAGE_RU
        ? LANGUAGE_EN
        : LANGUAGE_RU
    )
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={changeLanguage}
    >
      {t('translateButton')}
    </Button>
  )
}