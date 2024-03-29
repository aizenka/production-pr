import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook'

import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component:  Sidebar,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Sidebar>;


export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: { authData: {} }
    })
  ]
}

export const NoAuthLight: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {}
    })
  ]
}

export const Dark: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: { authData: {} }
    }),
    ThemeDecorator(Theme.DARK)
  ]
}

export const NoAuthDark: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {}
    }),
    ThemeDecorator(Theme.DARK)
  ]
}