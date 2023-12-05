import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/common'
import { Button, Input, Text } from 'shared/ui'
import { TextType } from 'shared/ui/Text/Text'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { useDynamicModuleLoader } from 'shared/lib/hooks'
import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import {
  getLoginError,
  getLoginLoading,
  getLoginPassword,
  getLoginUsername
} from '../../model/selectors'
import { loginByUsername } from '../../model/services'
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
}

const LOGIN_REDUCER_KEY = 'loginForm'

const initialReducers:ReducersList = {
  [LOGIN_REDUCER_KEY]: loginReducer
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  useDynamicModuleLoader(initialReducers)

  const { t } = useTranslation()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginLoading)
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

export default LoginForm