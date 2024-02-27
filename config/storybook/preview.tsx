import type { Preview } from '@storybook/react'
import {
  StyleDecorator,
  ThemeDecorator,
  RouterDecorator,
  TranslationDecorator
} from '../../src/shared/config/storybook'
import { Theme } from '../../src/app/providers/ThemeProvider'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    RouterDecorator,
    TranslationDecorator,
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT)
  ]
}

export default preview
