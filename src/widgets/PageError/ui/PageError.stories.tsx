import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook'

import { PageError } from './PageError'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component:  PageError,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof PageError>;


export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}