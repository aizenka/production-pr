import type { Preview } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import {
  StyleDecorator,
  ThemeDecorator,
  RouterDecorator,
  TranslationDecorator,
  SuspenseDecorator
} from '../../src/shared/config/storybook'

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
    SuspenseDecorator,
    TranslationDecorator,
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT)
  ]
}

export default preview
