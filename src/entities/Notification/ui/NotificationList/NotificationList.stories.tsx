import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook'

import { NotificationList } from './NotificationList'

const meta: Meta<typeof NotificationList> = {
  title: 'entities/Notifications/NotificationList',
  component:  NotificationList,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof NotificationList>;


export const Light: Story = {
  args: {},
  decorators: []
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}