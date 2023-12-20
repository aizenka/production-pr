import type { Meta, StoryObj } from '@storybook/react'

import ArticlesPage from './ArticlesPage'

const meta: Meta<typeof ArticlesPage> = {
  title: '/ArticlesPage',
  component:  ArticlesPage,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ArticlesPage>;


export const Light: Story = {
  args: {},
  decorators: []
}