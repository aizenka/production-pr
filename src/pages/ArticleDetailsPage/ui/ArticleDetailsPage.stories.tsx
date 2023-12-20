import type { Meta, StoryObj } from '@storybook/react'

import ArticleDetailsPage from './ArticleDetailsPage'

const meta: Meta<typeof ArticleDetailsPage> = {
  title: '/ArticleDetailsPage',
  component:  ArticleDetailsPage,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ArticleDetailsPage>;


export const Light: Story = {
  args: {},
  decorators: []
}