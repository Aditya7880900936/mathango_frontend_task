import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { FilterState } from '../../types'

const initialState: FilterState = {
  selectedClass: 'all',
  selectedUnits: 'all',
  statusFilter: [],   // empty array means no filters (all)
  sortBy: 'name',
}


const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setClassFilter: (state, action: PayloadAction<string>) => {
      state.selectedClass = action.payload
    },
    setUnitsFilter: (state, action: PayloadAction<string>) => {
      state.selectedUnits = action.payload
    },
    setStatusFilter: (state, action: PayloadAction<string>) => {
      const status = action.payload
    
      if (status === 'all') {
        state.statusFilter = []  // clear all filters
      } else {
        const index = state.statusFilter.indexOf(status)
        if (index > -1) {
          // status already selected, remove it (toggle off)
          state.statusFilter.splice(index, 1)
        } else {
          // add new status filter
          state.statusFilter.push(status)
        }
      }
    },
    
    setSortBy: (state, action: PayloadAction<'name' | 'questions'>) => {
      state.sortBy = action.payload
    }
  },
})

export const { setClassFilter, setUnitsFilter, setStatusFilter, setSortBy } = filtersSlice.actions
export default filtersSlice.reducer