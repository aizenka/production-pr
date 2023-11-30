import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { Button, Input } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <div className={cls.inputsGroup}>
        <Input
          autofocus
          placeholder={t('EnterUsername')}
        />
        <Input
          placeholder={t('EnterPassword')}
          type='password'
        />
      </div>
      <Button
        className={cls.loginBtn}
        variant={ButtonVariant.OUTLINED}
      >
        {t('login')}
      </Button>
    </div>
  )
}