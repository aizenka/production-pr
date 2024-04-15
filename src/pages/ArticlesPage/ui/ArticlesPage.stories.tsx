import { StoreDecorator } from '@/shared/config/storybook'

import ArticlesPage from './ArticlesPage'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ArticlesPage> = {
  title: 'pages/ArticlesPage',
  component:  ArticlesPage,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ArticlesPage>;

// TODO: add mock data

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({})]
}