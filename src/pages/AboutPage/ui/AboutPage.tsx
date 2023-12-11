import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ABOUT_PAGE_NAMESPACE } from 'shared/constants/i18n'

// interface AboutPageProps {
//   className?: string
// }

export default memo(function AboutPage () {
  const { t } = useTranslation(ABOUT_PAGE_NAMESPACE)

  return (
    <div>
      {t('aboutPage')}
    </div>
  )
})