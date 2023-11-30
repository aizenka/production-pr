import { classNames } from 'shared/lib'
import { Modal } from 'shared/ui'
import { LoginForm } from '../LoginForm/LoginForm'
import cls from './LoginModal.module.scss'

interface LoginModalProps {
  className?: string,
  isOpen: boolean,
  onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
  const {
    className,
    isOpen,
    onClose
  } = props

  return (
    <Modal
      className={classNames(cls.loginModal, {}, [className])}
      open={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  )
}