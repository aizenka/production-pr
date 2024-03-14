import { classNames } from '@/shared/lib/common'
import { RippleLoader } from '@/shared/ui'
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.pageLoader, {}, [className])}>
      <RippleLoader />
    </div>
  )
}