import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/common'
import { Button, Column, Input, Text } from 'shared/ui'
import { TextType } from 'shared/ui/Text/Text'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { useAppDispatch } from 'shared/lib/hooks'
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
  className?: string,
  onSuccess: () => void
}

const LOGIN_REDUCER_KEY = 'loginForm'

const initialReducers:ReducersList = {
  [LOGIN_REDUCER_KEY]: loginReducer
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  useDynamicModuleLoader(initialReducers)

  const { t } = useTranslation()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginLoading)
  const dispatch = useAppDispatch()

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    const res = await dispatch(loginByUsername({ username, password }))

    if (res.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, password, username, onSuccess])

  return (
    <Column
      className={classNames(cls.loginForm, {}, [className])}
      gap={16}
    >
      <Text text={t('authForm')}/>
      <Column gap={8}>
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
      </Column>
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
    </Column>
  )
})

export default LoginForm