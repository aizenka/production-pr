import { useState } from 'react'
import { classNames } from 'shared/lib'
import { ThemeSwitcher } from '../../../ThemeSwitcher'
import { LangSwitcher } from '../../../LangSwitcher'
import cls from './Sidebar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)

  const onToggleCollapse = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.sidebar, {
        [cls.collapsed]: !!collapsed
      }, [className])}
    >
      <Button
        data-testid='sidebarToggleButton'
        onClick={onToggleCollapse}
      >
        {t(collapsed ? 'hideSidebar' : 'showSidebar')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.langSwitcher}/>
      </div>
    </div>
  )
}