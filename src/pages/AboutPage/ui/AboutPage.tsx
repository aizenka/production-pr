import { useTranslation } from 'react-i18next'
import { ABOUT_PAGE_NAMESPACE } from 'constants/i18n'

// interface AboutPageProps {
//   className?: string
// }

export default function AboutPage () {
  const { t } = useTranslation(ABOUT_PAGE_NAMESPACE)

  return (
    <div>
      {t('aboutPage')}
    </div>
  )
}