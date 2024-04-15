import { Theme } from '@/shared/constants/theme'
import {
  StyleDecorator,
  ThemeDecorator,
  RouterDecorator,
  TranslationDecorator,
  SuspenseDecorator
} from '../../src/shared/config/storybook'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: 'fullscreen'
  },
  decorators: [
    RouterDecorator,
    SuspenseDecorator,
    TranslationDecorator,
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT)
  ]
}

export default preview
