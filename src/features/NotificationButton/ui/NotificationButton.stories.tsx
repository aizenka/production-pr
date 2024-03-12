import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

import { NotificationButton } from './NotificationButton'

const meta: Meta<typeof NotificationButton> = {
  title: 'features/NotificationButton',
  component:  NotificationButton,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof NotificationButton>;


export const Light: Story = {
  args: {},
  decorators: []
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}