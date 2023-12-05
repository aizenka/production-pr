import {
  configureStore,
  ReducersMapObject
} from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { StateSchema } from './StateSchema'

export function createRudexStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer
  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__
  })

  // @ts-expect-error fix later
  store.reducerManager = reducerManager

  return store
}