import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import HomeIcon from '@/shared/assets/icons/icon-home.svg'
import AboutIcon from '@/shared/assets/icons/icon-about.svg'
import ProfileIcon from '@/shared/assets/icons/icon-profile.svg'
import ArticlesIcon from '@/shared/assets/icons/icon-articles.svg'
import { RoutePath } from '@/shared/constants/router'
import type { SidebarItemType } from '../types/SidebarItem'

export const getSidebarItems = createSelector(getUserAuthData,(user) => {
  const sidebarItemsList:SidebarItemType[] = [
    {
      path: RoutePath.main,
      text: 'mainPage',
      Icon: HomeIcon
    },
    {
      path: RoutePath.about,
      text: 'aboutPage',
      Icon: AboutIcon
    }
  ]

  if (user) {
    sidebarItemsList.push(
      {
        path: `${RoutePath.profile}${user.id}`,
        text: 'profilePage',
        Icon: ProfileIcon,
        authOnly: true
      },
      {
        path: RoutePath.articles,
        text: 'articles',
        Icon: ArticlesIcon,
        authOnly: true
      }
    )
  }

  return sidebarItemsList
})