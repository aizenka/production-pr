import { FC, useMemo, useState } from 'react'
import { ThemeContext, LOCAL_STORAGE_THEME_KEY, Theme } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
  initialTheme?: Theme
}

const ThemeProvider: FC <ThemeProviderProps> = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProviderProps = useMemo(() => {
    return {
      theme,
      setTheme
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={defaultProviderProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider