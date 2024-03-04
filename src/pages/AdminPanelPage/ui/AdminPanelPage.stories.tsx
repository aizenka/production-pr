import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

import AdminPanelPage from './AdminPanelPage'

const meta: Meta<typeof AdminPanelPage> = {
  title: '/AdminPanelPage',
  component:  AdminPanelPage,
  parameters: {},
  argTypes: {}
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