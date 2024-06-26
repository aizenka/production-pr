import { Theme } from '@/shared/constants/theme'
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook'

import AdminPanelPage from './AdminPanelPage'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof AdminPanelPage> = {
  title: 'pages/AdminPanelPage',
  component:  AdminPanelPage,
  parameters: {},
  argTypes: {},
  decorators: [StoreDecorator({})]
}

export default meta
type Story = StoryObj<typeof AdminPanelPage>;


export const Light: Story = {
  args: {},
  decorators: []
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}