import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/common'
import { Button, Column } from '@/shared/ui'
import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

// TODO: add additional styling interfaces
export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const onReload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    location.reload()
  }

  return (
    <Column
      className={classNames(cls.pageError, {}, [className])}
      align='center'
      vAlign='center'
    >
      <p>
        {t('pageError')}
      </p>
      <Button
        className={cls.reloadButton}
        onClick={onReload}
      >
        {t('pageErrorReloadButton')}
      </Button>
    </Column>
  )
}