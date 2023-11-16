import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

import { Button, ButtonVariant } from './Button'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Button>;


export const TextLight: Story = {
  args: {
    children: 'text button',
    variant: ButtonVariant.TEXT
  }
}

export const OutlinedLight: Story = {
  args: {
    children: 'Outlined button',
    variant: ButtonVariant.OUTLINED
  }
}

export const TextDark: Story = {
  args: {
    children: 'text button',
    variant: ButtonVariant.TEXT
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OutlinedDark: Story = {
  args: {
    children: 'Outlined button',
    variant: ButtonVariant.OUTLINED
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}