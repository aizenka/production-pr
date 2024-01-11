import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'

import AddCommentForm from './AddCommentForm'

const meta: Meta<typeof AddCommentForm> = {
  title: 'features/AddCommentForm',
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