import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook'

import ForbiddenPage from './ForbiddenPage'

const meta: Meta<typeof ForbiddenPage> = {
  title: 'pages/ForbiddenPage',
  component:  ForbiddenPage,
  parameters: {},
  argTypes: {},
  decorators: [StoreDecorator({})]
}

export default meta
type Story = StoryObj<typeof ForbiddenPage>;


export const Light: Story = {
  args: {},
  decorators: []
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}