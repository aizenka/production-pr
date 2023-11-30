import { Modal } from 'shared/ui'
import { LoginForm } from '../LoginForm/LoginForm'


interface LoginModalProps {
  className?: string,
  isOpen: boolean,
  onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
  const {
    isOpen,
    onClose
  } = props

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  )
}