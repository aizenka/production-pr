import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook'

import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  component:  Tabs,
  parameters: {},
  argTypes: {},
  args: {
    tabs: [
      {
        key: 'tab 1',
        content: 'tab 1'
      },
      {
        key: 'tab 2',
        content: 'tab 2'
      },
      {
        key: 'tab 3',
        content: 'tab 3'
      },
      {
        key: 'tab 4',
        content: 'tab 4'
      }
    ],
    selectedKey: 'tab 2',
    onTabClick: action('onTabClick')
  }
}

export default meta
type Story = StoryObj<typeof Tabs>;


export const Light: Story = {
  args: {},
  decorators: []
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}