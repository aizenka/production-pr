import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook'

import { Popover } from './Popover'

const meta: Meta<typeof Popover> = {
  title: 'shared/Popover',
  component:  Popover,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Popover>;


export const Light: Story = {
  args: {},
  decorators: []
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}