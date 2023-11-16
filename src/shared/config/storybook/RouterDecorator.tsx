import { Decorator } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

const RouterDecorator: Decorator = (Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )
}

export default RouterDecorator