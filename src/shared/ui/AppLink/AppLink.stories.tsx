import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook'

import { AppLink } from './AppLink'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component:  AppLink,
  parameters: {},
  argTypes: {},
  args: {
    to : '/'
  }
}

export default meta
type Story = StoryObj<typeof AppLink>;


export const LightPrimary: Story = {
  args: {
    children: 'Text',
    theme: 'primary'
  }
}

export const LightSecondary: Story = {
  args: {
    children: 'Text',
    theme: 'secondary'
  }
}

export const DarkPrimary: Story = {
  args: {
    children: 'Text',
    theme: 'primary'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const DarkSecondary: Story = {
  args: {
    children: 'Text',
    theme: 'secondary'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}