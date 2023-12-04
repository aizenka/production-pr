import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { StateSchema } from './StateSchema'

export function createRudexStore (initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    loginForm: loginReducer,
    user: userReducer
  }

  return configureStore<StateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: __IS_DEV__
  })
}