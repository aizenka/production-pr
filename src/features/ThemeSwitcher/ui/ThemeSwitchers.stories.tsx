import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook'

import { ThemeSwitcher } from './ThemeSwitcher'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'features/ThemeSwitcher',
  component:  ThemeSwitcher,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>;


export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}