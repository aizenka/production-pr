import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/common'
import { AppLink, Button } from 'shared/ui'
import { ButtonVariant, ButtonSize } from 'shared/ui/Button/Button'
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { ThemeSwitcher } from '../../../ThemeSwitcher'
import { LangSwitcher } from '../../../LangSwitcher'
import HomeIcon from 'shared/assets/icons/icon-home.svg'
import AboutIcon from 'shared/assets/icons/icon-about.svg'
import cls from './Sidebar.module.scss'

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
        className={cls.collapseBtn}
        square
        size={ButtonSize.L}
        variant={ButtonVariant.FLAT_INVERTED}
        onClick={onToggleCollapse}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.navigateItems}>
        <AppLink
          className={cls.link}
          to={RoutePath.main}
          theme={AppLinkVariant.SECONDARY}
        >
          <HomeIcon className={cls.navigateIcon} />
          <span className={cls.linkText}>
            {t('mainPage')}
          </span>
        </AppLink>
        <AppLink
          className={cls.link}
          to={RoutePath.about}
          theme={AppLinkVariant.SECONDARY}
        >
          <AboutIcon className={cls.navigateIcon} />
          <span className={cls.linkText}>
            {t('aboutPage')}
          </span>
        </AppLink>
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
}