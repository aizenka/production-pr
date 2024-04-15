// TODO: add ignoreForFile flag in layer imports rule
// eslint-disable-next-line feature-sliced-design-path-checker/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import type { Decorator } from '@storybook/react'
import type { Theme } from '../../constants/theme'

const ThemeDecorator = (theme: Theme):Decorator => (Story) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
}



export default ThemeDecorator