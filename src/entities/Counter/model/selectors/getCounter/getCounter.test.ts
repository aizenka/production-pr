import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'shared/config/store'
import { getCounter } from './getCounter'

describe('getCounterTest', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    }

    expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
  })
})