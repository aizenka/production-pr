import type { Meta, StoryObj } from '@storybook/react'

import { ArticleDetails } from './ArticleDetails'

const meta: Meta<typeof ArticleDetails> = {
  title: 'entities/ArticleDetails',
  component:  ArticleDetails,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ArticleDetails>;


export const Light: Story = {
  args: {},
  decorators: []
}