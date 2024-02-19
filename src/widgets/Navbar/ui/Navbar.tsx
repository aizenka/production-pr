import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Avatar, Button, Dropdown } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/common'
import { LoginModal } from 'features/AuthByUsername'
import { getUserAuthData, userActions } from 'entities/User'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useAppDispatch } from 'shared/lib/hooks'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const authData = useSelector(getUserAuthData)
  const dispatch = useAppDispatch()
  const [openAuthModal, setOpenAuthModal] = useState(false)
  const { t } = useTranslation()

  const onCloseAuthModal = useCallback(() => {
    setOpenAuthModal(false)
  }, [])

  const onOpenAuthModal = useCallback(() => {
    setOpenAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const renderNavbarContent = () => {
    if (authData) {
      return (
        <Dropdown
          className={cls.dropdown}
          trigger={
            <Avatar
              size={40}
              src={authData?.avatarUrl}
              alt='user avatar'
            />
          }
          items={[
            {
              content: t('profilePage'),
              href: `${RoutePath.profile}${authData.id}`
            },
            {
              content: t('logout'),
              onClick: onLogout
            }
          ]}
          direction='bottom-right'
        />
      )
    } else {
      return (
        <>
          <Button
            className={cls.link}
            variant={ButtonVariant.TEXT_INVERTED}
            onClick={onOpenAuthModal}
          >
            {t('login')}
          </Button>
          {
            openAuthModal && (
              <LoginModal
                isOpen={openAuthModal}
                onClose={onCloseAuthModal}
              />
            )
          }
        </>
      )
    }
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      {renderNavbarContent()}
    </header>
  )
})