import { BrowserRouter } from 'react-router-dom'
import { Decorator } from '@storybook/react'

const RouterDecorator: Decorator = (Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )
}

export default RouterDecorator