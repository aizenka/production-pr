import type { ReactNode } from 'react'
import { Provider } from 'react-redux'
import type { ReducersMapObject } from '@reduxjs/toolkit'
import type { StateSchema } from '@/shared/config/store'
import { createReduxStore } from '@/shared/config/store'

interface StoreProviderProps {
  children?: ReactNode,
  initialState?: StateSchema,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {
    initialState,
    asyncReducers,
    children
  } = props

  return (
    <Provider store={createReduxStore(
      initialState,
      asyncReducers as ReducersMapObject<StateSchema>
    )}>
      {children}
    </Provider>
  )
}