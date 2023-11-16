import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

import { AppLink, AppLinkVariant } from './AppLink'

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
    theme: AppLinkVariant.PRIMARY
  }
}

export const LightSecondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkVariant.SECONDARY
  }
}

export const DarkPrimary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkVariant.PRIMARY
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const DarkSecondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkVariant.SECONDARY
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}