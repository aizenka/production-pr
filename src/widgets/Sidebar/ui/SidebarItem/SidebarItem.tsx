import { getUserAuthData } from 'entities/User'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/common'
import { AppLink } from 'shared/ui'
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { SidebarItemType } from '../../model/types/SidebarItem'
import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
  item: SidebarItemType,
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation()

  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) return null

  return (
    <AppLink
      className={classNames(cls.link, { [cls.collapsed]: !!collapsed })}
      to={item.path}
      theme={AppLinkVariant.SECONDARY}
    >
      <item.Icon className={cls.navigateIcon} />
      <span className={cls.linkText}>
        {t(item.text)}
      </span>
    </AppLink>
  )
})