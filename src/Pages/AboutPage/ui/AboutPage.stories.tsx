import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

import AboutPage from './AboutPage'

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component:  AboutPage,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof AboutPage>;


export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}