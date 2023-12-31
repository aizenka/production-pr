import { ReducersMapObject } from '@reduxjs/toolkit'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createRudexStore, StateSchema } from 'shared/config/store'

interface StoreProviderProps {
  children?: ReactNode,
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {
    initialState,
    asyncReducers,
    children
  } = props

  return (
    <Provider store={createRudexStore(initialState, asyncReducers)}>
      {children}
    </Provider>
  )
}