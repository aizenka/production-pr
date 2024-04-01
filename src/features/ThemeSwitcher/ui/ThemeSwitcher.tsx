import { memo } from 'react'
import { Button } from '@/shared/ui'
import { classNames } from '@/shared/lib/common'
import SwitchThemeIcon from '@/shared/assets/icons/icon-switch-theme.svg'
import { useTheme } from '@/shared/lib/hooks'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      <SwitchThemeIcon className={cls[theme]}/>
    </Button>
  )
})