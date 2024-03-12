import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/common'
import { Dropdown, Avatar } from 'shared/ui'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks'

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const isAdminPanelAvailable = isAdmin || isManager

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      trigger={
        <Avatar
          size={40}
          src={authData!.avatarUrl}
          alt='user avatar'
        />
      }
      items={[
        ...(
          isAdminPanelAvailable ? [
            {
              content: t('adminPage'),
              href: `${RoutePath.adminPanel}`
            }
          ]: []
        ),
        {
          content: t('profilePage'),
          href: `${RoutePath.profile}${authData!.id}`
        },
        {
          content: t('logout'),
          onClick: onLogout
        }
      ]}
      direction='bottom-right'
    />
  )
})