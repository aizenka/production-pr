import type { Decorator } from '@storybook/react'
import 'app/styles/index.scss'

const StyleDecorator: Decorator = (Story) => {
  return (
    <Story />
  )
}

export default StyleDecorator