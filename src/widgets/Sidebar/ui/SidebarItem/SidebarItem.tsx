import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/common'
import { AppLink, Row } from '@/shared/ui'
import { AppLinkVariant } from '@/shared/ui/AppLink/AppLink'
import type { SidebarItemType } from '../../model/types/SidebarItem'
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
      <Row
        gap={8}
        vAlign='center'
        style={{ width: 'auto', height: 24 }}
      >
        <item.Icon className={cls.navigateIcon} />
        <span className={cls.linkText}>
          {t(item.text)}
        </span>
      </Row>
    </AppLink>
  )
})