import { CurrencySelect } from './CurrencySelect'
import type { Meta, StoryObj } from '@storybook/react'


const meta: Meta<typeof CurrencySelect> = {
  title: 'entities/CurrencySelect',
  component:  CurrencySelect,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof CurrencySelect>;


export const Primary: Story = {
  args: {}
}