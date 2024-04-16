import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { ArticleListView, ArticleSortField, ArticleType } from '@/entities/Article'
import { LOCAL_STORAGE_ARTICLES_LIST_VIEW } from '@/shared/constants/localStorage'
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Article } from '@/entities/Article'
import type { StateSchema } from '@/app/providers/StoreProvider'
import type { SortOrder } from '@/shared/types/sort'
import type { ArticlesPageSchema } from '../types/ArticlesPageSchema'

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
    view: ArticleListView.GRID,
    page: 1,
    hasMore: true,
    sort: ArticleSortField.CREATED_AT,
    order: 'asc',
    search: '',
    selectedType: ArticleType.ALL,
    _inited: false
  }),
  reducers: {
    setView: (state, { payload }: PayloadAction<ArticleListView>) => {
      state.view = payload
      localStorage.setItem(LOCAL_STORAGE_ARTICLES_LIST_VIEW, payload)
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload
    },
    setOrder: (state, { payload }: PayloadAction<SortOrder>) => {
      state.order = payload
    },
    setSort: (state, { payload }: PayloadAction<ArticleSortField>) => {
      state.sort = payload
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload
    },
    setSelectedType: (state, { payload }: PayloadAction<ArticleType>) => {
      state.selectedType = payload
    },
    initState: state => {
      const view = (
        localStorage.getItem(LOCAL_STORAGE_ARTICLES_LIST_VIEW) as ArticleListView
      )
      state.view = view
      state.limit = view === ArticleListView.GRID ? 8 : 4
      state._inited = true
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state)
        }
      })
      .addCase(fetchArticleList.fulfilled, (
        state,
        action
      ) => {
        state.isLoading = false
        state.hasMore = action.payload.length >= state.limit!

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload)
        } else {
          articlesAdapter.addMany(state, action.payload)
        }
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