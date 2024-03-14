import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook'

import { RippleLoader } from './RippleLoader'

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