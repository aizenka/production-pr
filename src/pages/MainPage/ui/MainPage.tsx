import { useTranslation } from 'react-i18next'
import { MAIN_PAGE_NAMESPACE } from 'shared/constants/i18n'
import { BugButton } from 'app/providers/ErrorBoundary'
import { memo } from 'react'

const MainPage = memo(() => {
  const { t } = useTranslation(MAIN_PAGE_NAMESPACE)

  return (
    <div>
      <BugButton />&nbsp;
      {t('mainPage')}
    </div>
  )
})

export default MainPage