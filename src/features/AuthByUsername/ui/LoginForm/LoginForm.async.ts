import { lazy } from 'react'
import type { FC } from 'react'
import type { LoginFormProps } from './LoginForm'

export const LoginForm = lazy<FC<LoginFormProps>>(() => import('./LoginForm'))