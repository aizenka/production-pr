import type {
  PayloadAction
} from '@reduxjs/toolkit'
import {
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import type { Article } from '@/entities/Article'
import type { StateSchema } from '@/shared/config/store'
import { fetchArticleRecommendations } from '../services'
import type {
  ArticleDetailsRecommendationsSchema
} from '../types/ArticleDetailsRecommendationsSchema'

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})


const articleDetailsRecommendationsSlice = createSlice({
  name: 'articleDetailsPageRecommendationsSlice',
  initialState: recommendationsAdapter
    .getInitialState<ArticleDetailsRecommendationsSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {}
    }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleRecommendations.fulfilled, (
        state,
        { payload }: PayloadAction<Article[]>
      ) => {
        state.isLoading = false
        recommendationsAdapter.setAll(state, payload)
      })
      .addCase(fetchArticleRecommendations.rejected, (state, { payload }) => {
        state.error = payload
        state.isLoading = false
      })
  }
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => {
    return (
      state.articleDetailsPage?.recommendations ||
      recommendationsAdapter.getInitialState()
    )
  }
)

export const {
  actions: articleDetailsRecommendationsActions,
  reducer: articleDetailsRecommendationsReducer
} = articleDetailsRecommendationsSlice