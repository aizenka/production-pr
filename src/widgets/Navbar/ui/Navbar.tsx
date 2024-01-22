import { memo, useCallback, useState } from 'react'
import { Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/common'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks'

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
        <Button
          className={cls.links}
          variant={ButtonVariant.TEXT_INVERTED}
          onClick={onLogout}
        >
          {t('logout')}
        </Button>
      )
    } else {
      return (
        <>
          <Button
            className={cls.links}
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