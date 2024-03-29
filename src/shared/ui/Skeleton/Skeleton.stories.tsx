import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook'

import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component:  Skeleton,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Skeleton>;


export const Light: Story = {
  args: {
    width: '100%',
    height: 200
  },
  decorators: []
}

export const Dark: Story = {
  args: {
    width: '100%',
    height: 200
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const CircleLight: Story = {
  args: {
    borderRadius: '50%',
    width: 100,
    height: 100
  }
}

export const CircleDark: Story = {
  args: {
    borderRadius: '50%',
    width: 100,
    height: 100
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}