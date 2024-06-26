import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ABOUT_PAGE_NAMESPACE } from '@/shared/constants/i18n'
import { PageWrapper } from '@/widgets/PageWrapper'

// interface AboutPageProps {
//   className?: string
// }

const AboutPage = memo(() => {
  const { t } = useTranslation(ABOUT_PAGE_NAMESPACE)

  return (
    <PageWrapper data-testid='AboutPage'>
      {t('aboutPage')}
    </PageWrapper>
  )
})

export default AboutPage