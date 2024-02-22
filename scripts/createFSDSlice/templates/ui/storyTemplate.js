module.exports = (layer, componentName) => {
  return `import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook'

import { ${componentName} } from './${componentName}'

const meta: Meta<typeof ${componentName}> = {
  title: '${layer}/${componentName}',
  component:  ${componentName},
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ${componentName}>;


export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}
`
}