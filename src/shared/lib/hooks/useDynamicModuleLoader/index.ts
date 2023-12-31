import { Reducer } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useStore } from 'react-redux'
import { ReduxStoreWithManager } from 'shared/config/store'
import { StateSchemaKey } from 'shared/config/store/StateSchema'
import useAppDispatch from '../useAppDispatch'

export interface DynamicModuleLoaderOptions {
  removeAfterUnmount?: boolean
}

export type ReducersList = {
  [key in StateSchemaKey]?: Reducer
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
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
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