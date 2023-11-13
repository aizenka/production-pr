import { useState } from 'react'
import { classNames } from 'shared/lib'
import { ThemeSwitcher } from '../../../ThemeSwitcher'
import { LangSwitcher } from '../../../LangSwitcher'
import cls from './Sidebar.module.scss'
import { useTranslation } from 'react-i18next'

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
      className={classNames(cls.sidebar, {
        [cls.collapsed]: !!collapsed
      }, [className])}
    >
      <button
        type='button'
        onClick={onToggleCollapse}
      >
        {t(collapsed ? 'hideSidebar' : 'showSidebar')}
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.langSwitcher}/>
      </div>
    </div>
  )
}