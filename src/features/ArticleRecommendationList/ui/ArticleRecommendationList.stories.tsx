import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook'

import { ArticleRecommendationList } from './ArticleRecommendationList'

const meta: Meta<typeof ArticleRecommendationList> = {
  title: 'features/ArticleRecommendationList',
  component: ArticleRecommendationList,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ArticleRecommendationList>;


export const Normal: Story = {
  args: {},
  decorators: [
    StoreDecorator({})
  ]
}