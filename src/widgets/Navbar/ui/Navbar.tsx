import { useCallback, useState } from 'react'
import { Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [openAuthModal, setOpenAuthModal] = useState(false)
  const { t } = useTranslation()

  const onCloseAuthModal = useCallback(() => {
    setOpenAuthModal(false)
  }, [])

  const onOpenAuthModal = useCallback(() => {
    setOpenAuthModal(true)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
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
    </div>
  )
}