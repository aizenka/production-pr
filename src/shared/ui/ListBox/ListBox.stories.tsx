import type { Meta, StoryObj } from '@storybook/react'

import { ListBox } from './ListBox'

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component:  ListBox,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ListBox>;


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