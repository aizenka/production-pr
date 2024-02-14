import type { Meta, StoryObj } from '@storybook/react'

import { Row } from './Row'

const meta: Meta<typeof Row> = {
  title: 'shared/Flex/Row',
  component:  Row,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Row>;


export const Normal: Story = {
  args: {
    children: (
      <>
        <div>row</div>
        <div>row</div>
        <div>row</div>
        <div>row</div>
        <div>row</div>
      </>
    )
  },
  decorators: []
}