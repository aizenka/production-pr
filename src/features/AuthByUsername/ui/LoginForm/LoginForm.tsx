import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib'
import { Button, Input, Text } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors'
import { loginByUsername } from '../../model/services'
import cls from './LoginForm.module.scss'
import { TextType } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const {
    username,
    password,
    error,
    isLoading
  } = useSelector(getLoginState)
  const dispatch = useDispatch()

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text text={t('authForm')}/>
      <div className={cls.inputsGroup}>
        <Input
          autofocus
          placeholder={t('EnterUsername')}
          value={username}
          onChange={onChangeUsername}
        />
        <Input
          placeholder={t('EnterPassword')}
          type='password'
          value={password}
          onChange={onChangePassword}
        />
      </div>
      {
        error && (
          <Text
            text={t('incorrectAuthData')}
            type={TextType.ERROR}
          />
        )
      }
      <Button
        className={cls.loginBtn}
        variant={ButtonVariant.OUTLINED}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('login')}
      </Button>
    </div>
  )
})