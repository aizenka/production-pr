import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'

import { ProfileCard } from './ProfileCard'

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component:  ProfileCard,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ProfileCard>;


export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({})
  ]
}

export const Dark: Story = {
  args: {},
  decorators: [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK)
  ]
}