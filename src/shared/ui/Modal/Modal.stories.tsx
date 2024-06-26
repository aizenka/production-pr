import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook'

import { Modal } from './Modal'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component:  Modal,
  parameters: {},
  argTypes: {},
  args: {
    open: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum impedit incidunt blanditiis sunt distinctio eum nemo! Expedita temporibus culpa quaerat placeat ipsa, distinctio necessitatibus aliquid nesciunt laboriosam corporis laborum.'
  }
}

export default meta
type Story = StoryObj<typeof Modal>;


export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}