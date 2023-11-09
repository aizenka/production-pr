import { useTheme } from 'app/providers/ThemeProvider'
import { Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib'
import SwitchThemeIcon from 'shared/assets/icons/icon-switch-theme.svg'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      theme={ButtonVariant.TEXT}
      onClick={toggleTheme}
    >
      <SwitchThemeIcon className={cls[theme]}/>
    </Button>
  )
}