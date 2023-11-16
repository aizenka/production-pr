import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component:  Navbar,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Navbar>;


export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}