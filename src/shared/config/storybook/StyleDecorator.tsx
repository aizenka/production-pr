import type { Decorator } from '@storybook/react'
// TODO: add ignoreForFile flag in layer imports rule
// eslint-disable-next-line feature-sliced-design-path-checker/layer-imports
import '@/app/styles/index.scss'

const StyleDecorator: Decorator = (Story) => {
  return (
    <Story />
  )
}

export default StyleDecorator