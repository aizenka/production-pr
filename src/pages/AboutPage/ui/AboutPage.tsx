import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ABOUT_PAGE_NAMESPACE } from 'shared/constants/i18n'
import { PageWrapper } from 'shared/ui'

// interface AboutPageProps {
//   className?: string
// }

const AboutPage = memo(() => {
  const { t } = useTranslation(ABOUT_PAGE_NAMESPACE)

  return (
    <PageWrapper>
      {t('aboutPage')}
    </PageWrapper>
  )
})

export default AboutPage