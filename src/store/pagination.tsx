import { createSlice } from '@reduxjs/toolkit';

export const MAX_ITEMS = 325;
const INIT_LIMIT = 20;

const initialState: { page: number; limit: 5 | 10 | 20; query: string; pageCount: number } = {
  page: 1,
  limit: 20,
  query: '',
  pageCount: Math.ceil(MAX_ITEMS / INIT_LIMIT),
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: initialState,
  reducers: {
    updatePage(state, action) {
      state.page = action.payload;
    },
    updateLimit(state, action) {
      state.limit = action.payload;
    },
    updateQuery(state, action) {
      state.query = action.payload;
    },
    updatePageCount(state, action) {
      state.pageCount = action.payload;
    },
  },
});

export const paginationActions = paginationSlice.actions;

export default paginationSlice.reducer;
