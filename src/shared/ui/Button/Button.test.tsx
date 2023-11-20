import { render, screen } from '@testing-library/react'
import { Button } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'

describe('Button', () => {
  test('text \'test\' to be in the document', () => {
    render(<Button>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })

  test('class \'text\' to be in button styles', () => {
    render(<Button variant={ButtonVariant.TEXT} />)
    expect(screen.getByTestId('button')).toHaveClass('text')
  })
})