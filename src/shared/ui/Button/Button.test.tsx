import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  test('text \'test\' to be in the document', () => {
    render(<Button>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })

  test('class \'text\' to be in button styles', () => {
    render(<Button />)
    expect(screen.getByTestId('button')).toHaveClass('text')
  })
})