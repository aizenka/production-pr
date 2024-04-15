import { Row } from './Row'
import type { Meta, StoryObj } from '@storybook/react'


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