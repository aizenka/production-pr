import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

import { Text, TextSize, TextType } from './Text'

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component:  Text,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Text>;

export const SizeS: Story = {
  args: {
    title: 'Text title',
    text: 'description description description',
    size: TextSize.S
  }
}

export const SizeM: Story = {
  args: {
    title: 'Text title',
    text: 'description description description'
  }
}

export const SizeL: Story = {
  args: {
    title: 'Text title',
    text: 'description description description',
    size: TextSize.L
  }
}

export const Error: Story = {
  args: {
    title: 'Text title',
    text: 'description description description',
    type: TextType.ERROR
  }
}

export const OnlyTitle: Story = {
  args: {
    title: 'Text title'
  }
}

export const OnlyDescription: Story = {
  args: {
    text: 'description description description'
  }
}

export const Dark: Story = {
  args: {
    title: 'Text title',
    text: 'description description description'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OnlyTitleDark: Story = {
  args: {
    title: 'Text title'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OnlyDescriptionDark: Story = {
  args: {
    text: 'description description description'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}