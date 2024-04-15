import { Button } from '../../../Button/Button'

import { Dropdown } from './Dropdown'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Dropdown> = {
  title: 'shared/Dropdown',
  component:  Dropdown,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Dropdown>;


export const Normal: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'first'
      },
      {
        content: 'second'
      },
      {
        content: 'third'
      }
    ]
  },
  decorators: []
}