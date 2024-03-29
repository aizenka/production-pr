import { createContext } from 'react'
import type { Theme } from '../../../constants/theme'

export interface ThemeContextProps {
  theme?: Theme,
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})