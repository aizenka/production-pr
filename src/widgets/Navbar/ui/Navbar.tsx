import { useCallback, useState } from 'react'
import { Button, Modal } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [openAuthModal, setOpenAuthModal] = useState(false)
  const { t } = useTranslation()

  const onToggleModal = useCallback(() => {
    setOpenAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        className={cls.links}
        variant={ButtonVariant.TEXT_INVERTED}
        onClick={onToggleModal}
      >
        {t('login')}
      </Button>
      <Modal
        open={openAuthModal}
        onClose={onToggleModal}
      // eslint-disable-next-line i18next/no-literal-string
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Suscipit quis voluptas error soluta minima ut provident. Vel sed,
        tenetur quo perferendis eligendi, delectus, nisi beatae incidunt sunt
        culpa eius dolore?
      </Modal>
    </div>
  )
}