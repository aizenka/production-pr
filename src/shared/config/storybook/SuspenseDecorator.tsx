import { Suspense } from 'react'
import { Decorator } from '@storybook/react'

const SuspenseDecorator: Decorator = (Story) => {
  return (
    <Suspense>
      <Story />
    </Suspense>
  )
}

export default SuspenseDecorator