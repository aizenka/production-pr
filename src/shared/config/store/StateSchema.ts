import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from 'entities/Article'
import type { UserSchema } from 'entities/User'
import { AddCommentFormSchema } from 'entities/AddCommentForm'
import type { LoginSchema } from 'features/AuthByUsername'
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage'
import { ArticlesPageSchema } from 'pages/ArticlesPage'
import $rtkApi from 'shared/api/rtk'
import { UISchema } from 'widgets/PageWrapper'
import { ProfileSchema } from 'features/EditableProfileCard'
import { AppDispatch } from './store'

export interface StateSchema {
  user: UserSchema
  ui: UISchema
  [$rtkApi.reducerPath]: ReturnType<typeof $rtkApi.reducer>

  // async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articlesPage?: ArticlesPageSchema
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddCommentFormSchema
  articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArgs {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArgs,
  dispatch: AppDispatch,
  state: StateSchema
}