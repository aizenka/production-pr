import { Theme } from '@/shared/constants/theme'
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook'

import { Navbar } from './Navbar'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component:  Navbar,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Navbar>;


export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({})
  ]
}

export const Dark: Story = {
  args: {},
  decorators: [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK)
  ]
}

export const AuthNabvar: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: { authData: {} }
    })
  ]
}