import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'shared/config/store'
import { getCounterValue } from './getCounterValue'

describe('getCounterValueTest', () => {
  test('should return value to equal 10', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    }

    expect(getCounterValue(state as StateSchema)).toEqual(10)
  })
})