import type { Meta, StoryObj } from '@storybook/react'

import { ArticleTextBlockComponent } from './ArticleTextBlockComponent'

const meta: Meta<typeof ArticleTextBlockComponent> = {
  title: 'entities/ArticleTextBlockComponent',
  component:  ArticleTextBlockComponent,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ArticleTextBlockComponent>;


export const Light: Story = {
  args: {},
  decorators: []
}