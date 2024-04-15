import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook'

import { Code } from './Code'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component:  Code,
  parameters: {},
  argTypes: {},
  args: {
    code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
  }
}

export default meta
type Story = StoryObj<typeof Code>;


export const Light: Story = {
  args: {},
  decorators: []
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}