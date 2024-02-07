import { FC, lazy } from 'react'
import { LoginFormProps } from './LoginForm'

export const LoginForm = lazy<FC<LoginFormProps>>(() => import('./LoginForm'))