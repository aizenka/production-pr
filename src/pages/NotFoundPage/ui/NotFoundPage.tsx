import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/common'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.notFoundPage, {}, [className])}>
      {t('notFoundPage')}
    </div>
  )
}