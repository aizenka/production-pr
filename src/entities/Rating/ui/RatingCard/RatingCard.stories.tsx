import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook'

import { RatingCard } from './RatingCard'

const meta: Meta<typeof RatingCard> = {
  title: 'entities/Rating/RatingCard',
  component:  RatingCard,
  parameters: {},
  argTypes: {},
  args: {
    title: 'Rating card title',
    feedbackTitle: 'Feedback title'
  }
}

export default meta
type Story = StoryObj<typeof RatingCard>;


export const Light: Story = {
  args: {},
  decorators: []
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}