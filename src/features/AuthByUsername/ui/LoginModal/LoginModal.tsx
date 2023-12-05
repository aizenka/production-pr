import { Suspense } from 'react'
import { Modal, RippleLoader } from 'shared/ui'
import { LoginForm } from '../LoginForm/LoginForm.async'


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
      <Suspense fallback={<RippleLoader />}>
        <LoginForm />
      </Suspense>
    </Modal>
  )
}