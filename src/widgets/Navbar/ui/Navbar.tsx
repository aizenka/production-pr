import { useCallback, useState } from 'react'
import { Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
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
          <LoginModal
            isOpen={openAuthModal}
            onClose={onCloseAuthModal}
          />
        </>
      )
    }
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      {renderNavbarContent()}
    </div>
  )
}