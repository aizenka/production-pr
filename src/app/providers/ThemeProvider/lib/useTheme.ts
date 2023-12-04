import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY } from 'shared/constants/localStorage'
import { Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export default function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}