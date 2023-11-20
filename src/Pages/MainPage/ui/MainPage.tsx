import { useTranslation } from 'react-i18next'
import { MAIN_PAGE_NAMESPACE } from 'constants/i18n'
import { BugButton } from 'app/providers/ErrorBoundary'

interface MainPageProps {
  className?: string
}

export default function MainPage ({ className }: MainPageProps) {
  const { t } = useTranslation(MAIN_PAGE_NAMESPACE)

  return (
    <div>
      <BugButton />&nbsp;
      {t('mainPage')}
    </div>
  )
}