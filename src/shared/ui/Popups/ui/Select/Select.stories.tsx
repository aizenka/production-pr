import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component:  Select,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Select>;


export const Light: Story = {
  args: {
    label: 'label',
    defaultValue: 'select value',
    items: [
      {
        value: 'val1',
        content: 'value 1'
      },
      {
        value: 'val2',
        content: 'value 2'
      },
      {
        value: 'disabledV',
        content: 'disabled',
        disabled: true
      }
    ]
  }
}