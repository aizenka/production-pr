import { screen } from '@testing-library/react'
import { renderComponent } from '@/shared/lib/tests'
import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteProfile
} from '@/shared/constants/router'
import { UserRole } from '@/entities/User'
import AppRouter from './AppRouter'

describe('app/providers/Router/AppRouter', () => {
  test('AboutPage should be rendered', async () => {
    renderComponent(
      <AppRouter />,
      {
        route: getRouteAbout()
      }
    )

    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  test('NotFoundPage shoud be rendered', async () => {
    renderComponent(
      <AppRouter />,
      {
        route: '/not-exist-route'
      }
    )

    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  test('should occur redirect if user is not authorized', async () => {
    renderComponent(
      <AppRouter />,
      {
        route: getRouteProfile('1')
      }
    )

    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  test('user should remain on the private page if he is logged in', async () => {
    renderComponent(
      <AppRouter />,
      {
        route: getRouteProfile('1'),
        initialState: {
          user: { _mounted: true, authData: {} }
        }
      }
    )

    const page = await screen.findByTestId('ProfilePage')
    expect(page).toBeInTheDocument()
  })

  test('Forbidden page should be rendered if user does`t have a suitable role ', async () => {
    renderComponent(
      <AppRouter />,
      {
        route: getRouteAdminPanel(),
        initialState: {
          user: { _mounted: true, authData: { roles: [UserRole.USER] } }
        }
      }
    )

    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('AdminPanel page should be rendered if the user has a suitable role', async () => {
    renderComponent(
      <AppRouter />,
      {
        route: getRouteAdminPanel(),
        initialState: {
          user: { _mounted: true, authData: { roles: [UserRole.ADMIN] } }
        }
      }
    )

    const page = await screen.findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })
})