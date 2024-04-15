import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook'

import { Button } from './Button'
import type { Meta, StoryObj } from '@storybook/react'

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
    children: 'Text button'
  }
}

export const TextInverted: Story = {
  args: {
    children: 'Text button',
    variant: 'textInverted'
  }
}

export const OutlinedLight: Story = {
  args: {
    children: 'Outlined button',
    variant: 'outlined'
  }
}

export const OutlinedDanger: Story = {
  args: {
    children: 'Outlined button',
    variant: 'outlinedDanger',
    disabled: true
  }
}

export const TextDark: Story = {
  args: {
    children: 'Text button'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OutlinedDark: Story = {
  args: {
    children: 'Outlined button',
    variant: 'outlined'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OutlinedSizeL: Story = {
  args: {
    children: 'Outlined button',
    variant: 'outlined',
    size: 'l'
  }
}

export const OutlinedSizeXL: Story = {
  args: {
    children: 'Outlined button',
    variant: 'outlined',
    size: 'xl'
  }
}

export const Flat: Story = {
  args: {
    children: 'Flat button',
    variant: 'flat'
  }
}

export const FlatInverted: Story = {
  args: {
    children: 'Flat button',
    variant: 'flatInverted'
  }
}

export const Square: Story = {
  args: {
    children: '>',
    variant: 'flatInverted',
    square: true
  }
}

export const SquareSizeL: Story = {
  args: {
    children: '>',
    variant: 'flatInverted',
    square: true,
    size: 'l'
  }
}

export const SquareXL: Story = {
  args: {
    children: '>',
    variant: 'flatInverted',
    square: true,
    size: 'xl'
  }
}

export const Disabled: Story = {
  args: {
    children: '>',
    variant: 'outlined',
    disabled: true
  }
}
