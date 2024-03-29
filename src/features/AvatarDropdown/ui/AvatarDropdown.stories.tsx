import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook'

import { AvatarDropdown } from './AvatarDropdown'

const meta: Meta<typeof AvatarDropdown> = {
  title: 'features/AvatarDropdown',
  component:  AvatarDropdown,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof AvatarDropdown>;


export const Light: Story = {
  args: {},
  decorators: []
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}