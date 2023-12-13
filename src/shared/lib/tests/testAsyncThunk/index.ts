import axios, { AxiosStatic } from 'axios'
import { AsyncThunkAction } from '@reduxjs/toolkit'
import { StateSchema } from 'shared/config/store'

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) =>
AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

export default function testAsyncThunk <Return, Arg, RejectedValue> (
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>
) {
  const dispatch: jest.MockedFn<ReturnType<typeof jest.fn>> = jest.fn()
  const getState: () => StateSchema = jest.fn()
  const api: jest.MockedFunctionDeep<AxiosStatic> = mockedAxios

  const callThunk = async (arg: Arg) => {
    const action = actionCreator(arg)
    const result = await action(dispatch, getState, { api })

    return result
  }

  return {
    dispatch,
    getState,
    actionCreator,
    callThunk,
    api
  }
}