import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/common'
import { Button } from 'shared/ui'
import { ButtonVariant, ButtonSize } from 'shared/ui/Button/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { ThemeSwitcher } from '../../../ThemeSwitcher'
import { LangSwitcher } from '../../../LangSwitcher'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemsList = useSelector(getSidebarItems)

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
        className={cls.collapseBtn}
        square
        size={ButtonSize.L}
        variant={ButtonVariant.FLAT_INVERTED}
        onClick={onToggleCollapse}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.navigateItems}>
        {
          sidebarItemsList.map((item) => {
            return (
              <SidebarItem
                key={item.path}
                item={item}
                collapsed={collapsed}
              />
            )
          })
        }
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={cls.langSwitcher}
          shortLng
        />
      </div>
    </div>
  )
})