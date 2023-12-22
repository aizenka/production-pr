import type { Meta, StoryObj } from '@storybook/react'

import { ArticleImageBlockComponent } from './ArticleImageBlockComponent'

const meta: Meta<typeof ArticleImageBlockComponent> = {
  title: 'entities/ArticleImageBlockComponent',
  component:  ArticleImageBlockComponent,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ArticleImageBlockComponent>;


export const Light: Story = {
  args: {},
  decorators: []
}