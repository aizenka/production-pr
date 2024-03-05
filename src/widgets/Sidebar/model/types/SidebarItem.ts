import { FunctionComponent, SVGProps } from 'react'

export interface SidebarItemType {
  path: string,
  text: string,
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
  authOnly?: boolean
}