import { Theme } from '@/shared/constants/theme'
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook'

import NotFoundPage from './NotFoundPage'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component:  NotFoundPage,
  parameters: {},
  argTypes: {},
  decorators: [StoreDecorator({})]
}

export default meta
type Story = StoryObj<typeof NotFoundPage>;


export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}