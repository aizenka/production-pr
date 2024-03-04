import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { FORBIDDEN_PAGE_NAMESPACE } from 'shared/constants/i18n'
import { classNames } from 'shared/lib/common'
import { PageWrapper } from 'widgets/PageWrapper'

interface ForbiddenPageProps {
  className?: string
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
  const { className } = props
  const { t } = useTranslation(FORBIDDEN_PAGE_NAMESPACE)

  return (
    <PageWrapper className={classNames('', {}, [className])}>
      {t('acessDenied')}
    </PageWrapper>
  )
})

export default ForbiddenPage