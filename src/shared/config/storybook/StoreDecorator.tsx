import type { Decorator } from '@storybook/react'
import type { ReducersMapObject } from '@reduxjs/toolkit'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { profileReducer } from '@/features/EditableProfileCard'
import { articleDetailsReducer } from '@/entities/Article/testing'
import { loginReducer } from '@/features/AuthByUsername/testing'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing'
import { articlesPageReducer } from '@/pages/ArticlesPage'

import type { ReducersList } from '@/shared/lib/hooks/useDynamicModuleLoader'
import type { StateSchema } from '../store'

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