import { Decorator } from '@storybook/react'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'

// TODO: fix ThemeProvider icon in stories
const ThemeDecorator = (theme: Theme):Decorator => (Story) => {
  return (
    <ThemeProvider>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
}



export default ThemeDecorator