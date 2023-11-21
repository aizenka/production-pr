import { screen, fireEvent } from '@testing-library/react'
import { renderComponent } from 'shared/lib'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'

describe('Sidebar', () => {
  test('render sidebar', () => {
    renderComponent(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle sidebar', () => {
    renderComponent(<Sidebar />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeInTheDocument()

    const toggleButton = screen.getByTestId('sidebarToggleButton')
    expect(toggleButton).toBeInTheDocument()

    fireEvent.click(toggleButton)

    expect(sidebar).toHaveClass('collapsed')
  })
})