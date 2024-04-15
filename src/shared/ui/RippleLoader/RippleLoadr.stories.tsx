import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook'

import { RippleLoader } from './RippleLoader'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof RippleLoader> = {
  title: 'shared/RippleLoader',
  component:  RippleLoader,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof RippleLoader>;


export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}