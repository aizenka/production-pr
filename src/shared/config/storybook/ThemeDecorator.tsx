import type { Decorator } from '@storybook/react'
import type { Theme } from '@/app/providers/ThemeProvider'
import { ThemeProvider } from '@/app/providers/ThemeProvider'

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