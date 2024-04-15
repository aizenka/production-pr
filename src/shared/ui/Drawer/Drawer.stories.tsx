import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook'

import { Drawer } from './Drawer'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Drawer> = {
  title: 'shared/Drawer',
  component:  Drawer,
  parameters: {},
  argTypes: {},
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum impedit incidunt blanditiis sunt distinctio eum nemo! Expedita temporibus culpa quaerat placeat ipsa, distinctio necessitatibus aliquid nesciunt laboriosam corporis laborum.'
  }
}

export default meta
type Story = StoryObj<typeof Drawer>;


export const Light: Story = {
  args: {},
  decorators: []
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}