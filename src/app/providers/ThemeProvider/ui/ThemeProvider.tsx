import { useMemo, useEffect, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/localStorage'
import { ThemeContext } from '@/shared/lib/context'
import { Theme } from '@/shared/constants/theme'
import type { ReactNode } from 'react'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
  initialTheme?: Theme,
  children: ReactNode
}

const ThemeProvider = ({ initialTheme, children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  useEffect(() => {
    document.body.classList.add(theme)

    return () => {
      document.body.classList.remove(theme)
    }
  }, [theme])

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