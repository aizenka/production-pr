import { useMemo } from 'react'
import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import { useAppDispatch } from '../hooks'
import type { SliceCaseReducers, CreateSliceOptions } from '@reduxjs/toolkit'


export const buildSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string
  >
  (options: CreateSliceOptions<State, CaseReducers, Name>) => {
  const slice = createSlice(options)

  const useActions = (): typeof slice.actions => {
    const dispatch = useAppDispatch()

    // @ts-expect-error TODO: fix bind creators type
    return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch])
  }

  return {
    ...slice,
    useActions
  }
}