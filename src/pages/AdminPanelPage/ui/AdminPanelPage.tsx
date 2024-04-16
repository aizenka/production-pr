import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ADMIN_PANEL_NAMESPACE } from '@/shared/constants/i18n'
import { classNames } from '@/shared/lib/common'
import { PageWrapper } from '@/widgets/PageWrapper'

interface AdminPanelPageProps {
  className?: string
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
  const { className } = props
  const { t } = useTranslation(ADMIN_PANEL_NAMESPACE)

  return (
    <PageWrapper
      className={classNames('', {}, [className])}
      data-testid='AdminPanelPage'
    >
      {t('adminPanel')}
    </PageWrapper>
  )
})

export default AdminPanelPage