import { useState } from 'react';
import { classNames } from 'shared/lib';
import { ThemeSwitcher } from '../../../ThemeSwitcher'
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
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
      <button onClick={onToggleCollapse}>toggle sidebar</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* i18n */}
      </div>
    </div>
  );
};