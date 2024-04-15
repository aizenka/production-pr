import { Column } from './Column'
import type { Meta, StoryObj } from '@storybook/react'


const meta: Meta<typeof Column> = {
  title: 'shared/Flex/Column',
  component:  Column,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Column>;


export const Normal: Story = {
  args: {
    children: (
      <>
        <div>column</div>
        <div>column</div>
        <div>column</div>
        <div>column</div>
        <div>column</div>
      </>
    )
  },
  decorators: []
}