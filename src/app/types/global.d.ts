/* eslint-disable @typescript-eslint/no-explicit-any */

declare const __IS_DEV__: boolean
declare const __API_URL__: string

declare module '*.module.css'

declare type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>
} : T

// declare module '*.module.scss'
declare module '*.scss' {
  const cls: { [className: string]: string }
  export default cls
}

declare module '*.svg' {
  import React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare module '*.png' {
  const value: any
  export default value
}

declare module '*.jpg' {
  const value: any
  export default value
}

declare module '*.jpeg' {
  const value: any
  export default value
}