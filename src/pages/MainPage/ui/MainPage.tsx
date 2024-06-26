import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { MAIN_PAGE_NAMESPACE } from '@/shared/constants/i18n'
// import { BugButton } from 'app/providers/ErrorBoundary'
import { PageWrapper } from '@/widgets/PageWrapper'

const MainPage = memo(() => {
  const { t } = useTranslation(MAIN_PAGE_NAMESPACE)

  return (
    <PageWrapper data-testid='MainPage'>
      {t('mainPage')}
    </PageWrapper>
  )
})

export default MainPage