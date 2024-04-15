import { Theme } from '@/shared/constants/theme'
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook'

import AboutPage from './AboutPage'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component:  AboutPage,
  parameters: {},
  argTypes: {},
  decorators: [StoreDecorator({})]
}

export default meta
type Story = StoryObj<typeof AboutPage>;


export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}