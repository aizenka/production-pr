import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook'
import { Text } from '../Text/Text'

import { Card } from './Card'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component:  Card,
  parameters: {},
  argTypes: {},
  args: {
    children: <Text title='test' text='test test' />
  }
}

export default meta
type Story = StoryObj<typeof Card>;


export const Light: Story = {
  args: {},
  decorators: []
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Outlined: Story = {
  args: {
    variant: 'outlined'
  }
}