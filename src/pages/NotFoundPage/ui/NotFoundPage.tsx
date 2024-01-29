import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/common'
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string
}

export default function NotFoundPage ({ className }: NotFoundPageProps) {
  const { t } = useTranslation()

  return (
    <PageWrapper className={classNames(cls.notFoundPage, {}, [className])}>
      {t('notFoundPage')}
    </PageWrapper>
  )
}