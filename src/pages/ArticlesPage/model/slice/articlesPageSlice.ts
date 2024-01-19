import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Article, ArticleListView } from 'entities/Article'
import { StateSchema } from 'shared/config/store'
import { LOCAL_STORAGE_ARTICLES_LIST_VIEW } from 'shared/constants/localStorage'
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList'
import { ArticlesPageSchema } from '../types/ArticlesPageSchema'

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})


const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleListView.GRID
  }),
  reducers: {
    setView: (state, { payload }: PayloadAction<ArticleListView>) => {
      state.view = payload,
      localStorage.setItem(LOCAL_STORAGE_ARTICLES_LIST_VIEW, payload)
    },
    initState: state => {
      state.view = (
        localStorage.getItem(LOCAL_STORAGE_ARTICLES_LIST_VIEW) as ArticleListView
      )
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleList.fulfilled, (
        state,
        { payload }: PayloadAction<Article[]>
      ) => {
        state.isLoading = false
        articlesAdapter.setAll(state, payload)
      })
      .addCase(fetchArticleList.rejected, (state, { payload }) => {
        state.error = payload
        state.isLoading = false
      })
  }
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
)

export const {
  actions: articlesPageActions,
  reducer: articlesPageReducer
} = articlesPageSlice