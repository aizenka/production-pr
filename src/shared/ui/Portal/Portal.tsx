import { createPortal } from 'react-dom'
import type { ReactNode } from 'react'

interface PortalProps {
  children: ReactNode,
  element?: HTMLElement
}

export const Portal = ({ children, element = document.body }: PortalProps) => {
  // TODO: remove casting after fix react definitely-typed
  return createPortal(children, element) as JSX.Element
}