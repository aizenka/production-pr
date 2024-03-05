import { createSelector } from '@reduxjs/toolkit'
import type { StateSchema } from 'shared/config/store'

export const getScroll = (state: StateSchema) => state.ui.scroll
export const getScrollByPath = createSelector(
  getScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
)