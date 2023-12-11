import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'

import ProfilePage from './ProfilePage'

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component:  ProfilePage,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ProfilePage>;


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