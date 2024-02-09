import { useEffect } from 'react'
import { useStore } from 'react-redux'
import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager } from 'shared/config/store'
import { StateSchema, StateSchemaKey } from 'shared/config/store/StateSchema'
import useAppDispatch from '../useAppDispatch'

export interface DynamicModuleLoaderOptions {
  removeAfterUnmount?: boolean
}

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

// type ReducersListEntry = [StateSchemaKey, Reducer]

export default function useDynamicModuleLoader (
  reducers: ReducersList,
  options: DynamicModuleLoaderOptions = {}
) {
  const { removeAfterUnmount = true } = options

  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()

    Object.entries(reducers).forEach(([name, reducer]) => {
      const isMounted = !!mountedReducers[name as StateSchemaKey]

      if (!isMounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer)
        dispatch({ type: `@INIT ${name} reducer` })
      }
    })

    return () => {
      if (!removeAfterUnmount) return

      Object.entries(reducers).forEach(([name]) => {
        store.reducerManager.remove(name as StateSchemaKey)
        dispatch({ type: `@DESTROY ${name} reducer` })
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

}