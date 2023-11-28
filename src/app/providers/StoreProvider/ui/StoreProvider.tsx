import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createRudexStore, StateSchema } from 'shared/config/store'

interface StoreProviderProps {
  children?: ReactNode,
  initialState?: StateSchema
}

export const StoreProvider = ({ initialState, children }: StoreProviderProps) => {
  return (
    <Provider store={createRudexStore(initialState)}>
      {children}
    </Provider>
  )
}