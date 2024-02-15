import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

import { ListBox } from './ListBox'

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component:  ListBox,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ListBox>;


export const Light: Story = {
  args: {},
  decorators: []
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}