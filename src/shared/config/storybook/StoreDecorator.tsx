import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { Decorator } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { StateSchema } from '../store'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer
}

const StoreDecorator = (
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
):Decorator => (Story) => {
  const _asyncReducers = {
    ...defaultAsyncReducers,
    ...asyncReducers
  } as ReducersMapObject

  return (
    <StoreProvider
      initialState={initialState as StateSchema}
      asyncReducers={_asyncReducers as ReducersMapObject}
    >
      <Story />
    </StoreProvider>
  )
}



export default StoreDecorator