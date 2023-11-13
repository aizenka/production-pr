import { useTranslation } from 'react-i18next'
import { MAIN_PAGE_NAMESPACE } from 'constants/i18n'

interface MainPageProps {
  className?: string
}

export default function MainPage ({ className }: MainPageProps) {
  const { t } = useTranslation(MAIN_PAGE_NAMESPACE)

  return (
    <div>
      {t('mainPage')}
    </div>
  )
}