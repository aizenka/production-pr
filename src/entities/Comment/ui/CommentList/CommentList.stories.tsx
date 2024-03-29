import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook'

import { CommentList } from './CommentList'

const meta: Meta<typeof CommentList> = {
  title: 'entities/CommentList',
  component:  CommentList,
  parameters: {},
  argTypes: {},
  args: {
    comments: [
      {
        id: '1',
        text: 'comment 1',
        user: { id: '1', username: 'some user 1' }
      },
      {
        id: '2',
        text: 'comment 2',
        user: { id: '1', username: 'some user 2' }
      },
      {
        id: '3',
        text: 'comment 3',
        user: { id: '2', username: 'some user 2' }
      }
    ]
  }
}

export default meta
type Story = StoryObj<typeof CommentList>;


export const Light: Story = {
  args: {},
  decorators: []
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Loading: Story = {
  args: {
    isLoading: true
  },
  decorators: []
}