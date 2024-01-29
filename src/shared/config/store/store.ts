import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject
} from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import $api from 'shared/api'
import { uiReducer } from 'widgets/PageWrapper'
import { createReducerManager } from './reducerManager'
import { StateSchema } from './StateSchema'

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    ui: uiReducer
  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
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