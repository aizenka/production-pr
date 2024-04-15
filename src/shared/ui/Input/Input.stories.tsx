import { Input } from './Input'
import type { Meta, StoryObj } from '@storybook/react'


const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Input>;


export const Primary: Story = {
  args: {
    placeholder: 'Type text',
    value: 'simple text'
  }
}
