import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Button, Row } from '@/shared/ui'
import { ButtonVariant } from '@/shared/ui/Button/Button'
import { classNames } from '@/shared/lib/common'
import { LoginModal } from '@/features/AuthByUsername'
import { getUserAuthData } from '@/entities/User'
import { NotificationButton } from '@/features/NotificationButton'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const [openAuthModal, setOpenAuthModal] = useState(false)

  const onCloseAuthModal = useCallback(() => {
    setOpenAuthModal(false)
  }, [])

  const onOpenAuthModal = useCallback(() => {
    setOpenAuthModal(true)
  }, [])

  const renderNavbarContent = () => {
    if (authData) {
      return (
        <Row
          className={cls.actions}
          gap={16}
          vAlign='center'
        >
          <NotificationButton />
          <AvatarDropdown />
        </Row>
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