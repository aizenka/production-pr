import type {
  UnknownAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject
} from '@reduxjs/toolkit'
import type { AxiosInstance } from 'axios'
import type { ArticleDetailsSchema } from '@/entities/Article'
import type { UserSchema } from '@/entities/User'
import type { AddCommentFormSchema } from '@/entities/AddCommentForm'
import type { LoginSchema } from '@/features/AuthByUsername'
import type { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage'
import type { ArticlesPageSchema } from '@/pages/ArticlesPage'
import type $rtkApi from '@/shared/api/rtk'
import type { UISchema } from '@/widgets/PageWrapper'
import type { ProfileSchema } from '@/features/EditableProfileCard'
import type { AppDispatch } from './store'

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
  reduce: (state: StateSchema, action: UnknownAction) => StateSchema
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