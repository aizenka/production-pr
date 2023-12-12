import {
  configureStore,
  ReducersMapObject
} from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import $api from 'shared/api'
import { createReducerManager } from './reducerManager'
import { StateSchema } from './StateSchema'

export type AppDispatch = ReturnType<typeof createRudexStore>['dispatch']

export function createRudexStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer
  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api
        }
      }
    }),
    devTools: __IS_DEV__
  })

  // @ts-expect-error fix later
  store.reducerManager = reducerManager

  return store
}