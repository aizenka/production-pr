import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

import { Modal } from './Modal'

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


export const ModalLight: Story = {
  args: {}
}

export const ModalDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}