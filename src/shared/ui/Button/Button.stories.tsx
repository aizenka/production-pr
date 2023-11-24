import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

import { Button, ButtonSize, ButtonVariant } from './Button'

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
    children: 'Text button',
    variant: ButtonVariant.TEXT
  }
}

export const TextInverted: Story = {
  args: {
    children: 'Text button',
    variant: ButtonVariant.TEXT_INVERTED
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
    children: 'Text button',
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

export const OutlinedSizeL: Story = {
  args: {
    children: 'Outlined button',
    variant: ButtonVariant.OUTLINED,
    size: ButtonSize.L
  }
}

export const OutlinedSizeXL: Story = {
  args: {
    children: 'Outlined button',
    variant: ButtonVariant.OUTLINED,
    size: ButtonSize.XL
  }
}

export const Flat: Story = {
  args: {
    children: 'Flat button',
    variant: ButtonVariant.FLAT
  }
}

export const FlatInverted: Story = {
  args: {
    children: 'Flat button',
    variant: ButtonVariant.FLAT_INVERTED
  }
}

export const Square: Story = {
  args: {
    children: '>',
    variant: ButtonVariant.FLAT_INVERTED,
    square: true
  }
}

export const SquareSizeL: Story = {
  args: {
    children: '>',
    variant: ButtonVariant.FLAT_INVERTED,
    square: true,
    size: ButtonSize.L
  }
}

export const SquareXL: Story = {
  args: {
    children: '>',
    variant: ButtonVariant.FLAT_INVERTED,
    square: true,
    size: ButtonSize.XL
  }
}
