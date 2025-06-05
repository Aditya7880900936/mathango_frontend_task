import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Chapter, ChaptersState } from '../../types'
import { mockData } from '@/Data/data'


// Thunk with subject passed as argument
export const fetchChapters = createAsyncThunk<Chapter[], string>(
  'chapters/fetchChapters',
  async (subject) => {
    try {
      // Normalize subject string
      const normalized = subject.replace(' PYQs', '').toLowerCase()

      // Filter chapters by subject
      const filtered = mockData.filter(
        (chapter) => chapter.subject.toLowerCase() === normalized
      )

      // Simulate API delay
      await new Promise((res) => setTimeout(res, 300))

      return filtered
    } catch (error) {
      throw new Error('Failed to load mock chapters data')
    }
  }
)

const initialState: ChaptersState = {
  data: [],
  loading: false,
  error: null,
  selectedSubject: 'Physics PYQs'
}

const chaptersSlice = createSlice({
  name: 'chapters',
  initialState,
  reducers: {
    setSelectedSubject: (state, action: PayloadAction<string>) => {
      state.selectedSubject = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChapters.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchChapters.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchChapters.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch chapters'
      })
  },
})

export const { setSelectedSubject } = chaptersSlice.actions
export default chaptersSlice.reducer
