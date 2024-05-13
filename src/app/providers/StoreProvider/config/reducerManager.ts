import { combineReducers } from '@reduxjs/toolkit'
import type { UnknownAction, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import type { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema'

export function createReducerManager (
  initialReducers:  ReducersMapObject<StateSchema>
): ReducerManager {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)
  let keysToRemove:StateSchemaKey[] = []

  return {
    getReducerMap: () => reducers,
    reduce: (state: StateSchema, action: UnknownAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        for (const key of keysToRemove) {
          delete state[key]
        }

        keysToRemove = []
      }

      // @ts-expect-error TODO: remove reducer manager and use combine slices with lazy load
      return combinedReducer(state, action)
    },
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
    },
    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]
      keysToRemove.push(key)

      combinedReducer = combineReducers(reducers)
    }
  }
}