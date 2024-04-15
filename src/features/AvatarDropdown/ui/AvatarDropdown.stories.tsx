import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook'

import { AvatarDropdown } from './AvatarDropdown'
import type { Meta, StoryObj } from '@storybook/react'

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