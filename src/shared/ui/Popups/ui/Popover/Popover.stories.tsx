import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook'

import { Popover } from './Popover'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Popover> = {
  title: 'shared/Popover',
  component:  Popover,
  parameters: {},
  argTypes: {},
  args: {
    trigger: <button type='button'>trigger</button>,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum impedit incidunt blanditiis sunt distinctio eum nemo! Expedita temporibus culpa quaerat placeat ipsa, distinctio necessitatibus aliquid nesciunt laboriosam corporis laborum.'
  }
}

export default meta
type Story = StoryObj<typeof Popover>;


export const Light: Story = {
  args: {},
  decorators: []
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}