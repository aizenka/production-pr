import type { RouteProps } from 'react-router-dom'
// eslint-disable-next-line feature-sliced-design-path-checker/layer-imports
import type { UserRole } from '@/entities/User'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean,
  roles?: UserRole[]
}