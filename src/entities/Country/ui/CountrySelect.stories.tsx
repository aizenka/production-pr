import { CountrySelect } from './CountrySelect'
import type { Meta, StoryObj } from '@storybook/react'


const meta: Meta<typeof CountrySelect> = {
  title: 'entities/CountrySelect',
  component:  CountrySelect,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof CountrySelect>;


export const Primary: Story = {
  args: {}
}