import { createContext } from 'react'

export const enum Theme {
  LIGHT = 'appLightTheme',
  DARK = 'appDarkTheme'
}

export interface ThemeContextProps {
  theme?: Theme,
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})