import { StoreDecorator } from '@/shared/config/storybook'

import LoginForm from './LoginForm'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof LoginForm>;


export const Primary: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: 'testUser', password: 'qwiqwe391' }
    })
  ]
}

export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'testUser',
        password: 'qwiqwe391',
        error: 'error'
      }
    })
  ]
}

export const WithLoading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { isLoading: true }
    })
  ]
}
