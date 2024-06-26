import { Theme } from '@/shared/constants/theme'
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook'

import MainPage from './MainPage'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component:  MainPage,
  parameters: {},
  argTypes: {},
  decorators: [StoreDecorator({})]
}

export default meta
type Story = StoryObj<typeof MainPage>;


export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}