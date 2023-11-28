import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { Counter } from './Counter'
import { renderComponent } from 'shared/lib'

describe('counterTest', () => {
  test('counter should be rendered and counter value should be 10', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } }
    })

    const counterValueElement = screen.getByTestId('counterValue')

    expect(counterValueElement).toBeInTheDocument()
    expect(counterValueElement).toHaveTextContent('10')
  })

  test('increment', async () => {
    const user = userEvent.setup()

    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } }
    })

    await user.click(screen.getByTestId('incrementBtn'))
    expect(screen.getByTestId('counterValue')).toHaveTextContent('11')
  })

  test('decrement', async () => {
    const user = userEvent.setup()

    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } }
    })

    await user.click(screen.getByTestId('decrementBtn'))
    expect(screen.getByTestId('counterValue')).toHaveTextContent('9')
  })
})