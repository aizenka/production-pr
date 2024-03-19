import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook'

import { NotificationItem } from './NotificationItem'

const meta: Meta<typeof NotificationItem> = {
  title: 'entities/Notifications/NotificationItem',
  component:  NotificationItem,
  parameters: {},
  argTypes: {},
  args: {
    notification: {
      id: '1',
      title: 'title',
      description: 'description'
    }
  }
}

export default meta
type Story = StoryObj<typeof NotificationItem>;


export const Light: Story = {
  args: {},
  decorators: []
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}