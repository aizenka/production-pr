import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY } from '../../../constants/localStorage'
import { ThemeContext } from '../../context'
import { Theme } from '../../../constants/theme'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export default function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    let newTheme:Theme

    switch (theme) {
    case Theme.DARK:
      newTheme = Theme.LIGHT
      break
    case Theme.LIGHT:
      newTheme = Theme.ORANGE
      break
    case Theme.ORANGE:
      newTheme = Theme.DARK
      break
    default:
      newTheme = Theme.LIGHT
    }

    setTheme && setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme: theme || Theme.LIGHT, toggleTheme }
}