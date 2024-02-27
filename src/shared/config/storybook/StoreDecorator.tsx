import { Decorator } from '@storybook/react'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { StoreProvider } from 'app/providers/StoreProvider'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { profileReducer } from 'features/EditableProfileCard'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice'
import { articlesPageReducer } from 'pages/ArticlesPage'

import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader'
import { StateSchema } from '../store'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articlesPage: articlesPageReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer
}

const StoreDecorator = (
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
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