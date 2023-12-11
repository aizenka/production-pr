import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import HomeIcon from 'shared/assets/icons/icon-home.svg'
import AboutIcon from 'shared/assets/icons/icon-about.svg'
import ProfileIcon from 'shared/assets/icons/icon-profile.svg'
import { SidebarItemType } from '../types/SidebarItem'


export const sidebarItemsList:SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'mainPage',
    Icon: HomeIcon
  },
  {
    path: RoutePath.about,
    text: 'aboutPage',
    Icon: AboutIcon
  },
  {
    path: RoutePath.profile,
    text: 'profilePage',
    Icon: ProfileIcon
  }
]