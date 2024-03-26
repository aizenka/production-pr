import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { getUserAuthData, getUserRoles } from '@/entities/User'
import type { UserRole } from '@/entities/User'
import { RoutePath } from '@/shared/constants/router'

interface RequireAuthProps {
  children: JSX.Element
  roles?: UserRole[]
}

const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const location = useLocation()
  const isAuth = useSelector(getUserAuthData)
  const userRoles = useSelector(getUserRoles)

  const hasRequireRoles = useMemo(() => {
    if (!roles) return true

    return roles.some(requiedRole => {
      return !!userRoles?.includes(requiedRole)
    })
  }, [roles, userRoles])

  if (!isAuth) {
    return (
      <Navigate
        to={RoutePath.main}
        state={{ from: location }}
        replace
      />
    )
  }

  if (!hasRequireRoles) {
    return (
      <Navigate
        to={RoutePath.forbidden}
        state={{ from: location }}
        replace
      />
    )
  }

  return children
}

export default RequireAuth