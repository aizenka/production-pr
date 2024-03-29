import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Theme } from '@/shared/constants/theme'
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook'

import AddCommentForm from './AddCommentForm'

const meta: Meta<typeof AddCommentForm> = {
  title: 'entities/AddCommentForm',
  component:  AddCommentForm,
  parameters: {},
  argTypes: {},
  args: {
    onSendComment: action('onSendComment')
  },
  decorators: [StoreDecorator({})]
}

export default meta
type Story = StoryObj<typeof AddCommentForm>;


export const Light: Story = {
  args: {},
  decorators: []
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}