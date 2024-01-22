import { useTranslation } from 'react-i18next'
import { MAIN_PAGE_NAMESPACE } from 'shared/constants/i18n'
import { BugButton } from 'app/providers/ErrorBoundary'
import { memo } from 'react'
import { PageWrapper } from 'shared/ui'

const MainPage = memo(() => {
  const { t } = useTranslation(MAIN_PAGE_NAMESPACE)

  return (
    <PageWrapper>
      <BugButton />&nbsp;
      {t('mainPage')}
    </PageWrapper>
  )
})

export default MainPage