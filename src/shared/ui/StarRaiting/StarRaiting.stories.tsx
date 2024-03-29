import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook'

import { StarRaiting } from './StarRaiting'

const meta: Meta<typeof StarRaiting> = {
  title: 'shared/StarRaiting',
  component:  StarRaiting,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof StarRaiting>;


export const Light: Story = {
  args: {},
  decorators: []
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}