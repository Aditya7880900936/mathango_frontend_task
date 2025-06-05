import { configureStore } from '@reduxjs/toolkit'
import chaptersReducer from './slices/chapterSlice'
import filtersReducer from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    chapters: chaptersReducer,
    filters: filtersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch