import { DeepPartial } from '@reduxjs/toolkit'
import { Decorator } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { StateSchema } from '../store'

const StoreDecorator = (initialState: DeepPartial<StateSchema>):Decorator => (Story) => {
  return (
    <StoreProvider initialState={initialState as StateSchema}>
      <Story />
    </StoreProvider>
  )
}



export default StoreDecorator