import { ReducersMapObject } from '@reduxjs/toolkit'
import { Decorator } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { profileReducer } from 'entities/Profile'
import { addCommentFormReducer } from 'features/AddCommentForm'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { articleDetailCommentsReducer } from 'pages/ArticleDetailsPage'
import { articlesPageReducer } from 'pages/ArticlesPage'

import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader'
import { StateSchema } from '../store'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articlesPage: articlesPageReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailCommentsReducer
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