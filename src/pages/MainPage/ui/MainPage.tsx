import { useTranslation } from 'react-i18next'
import { MAIN_PAGE_NAMESPACE } from 'constants/i18n'
import { BugButton } from 'app/providers/ErrorBoundary'

export default function MainPage () {
  const { t } = useTranslation(MAIN_PAGE_NAMESPACE)

  return (
    <div>
      <BugButton />&nbsp;
      {t('mainPage')}
    </div>
  )
}