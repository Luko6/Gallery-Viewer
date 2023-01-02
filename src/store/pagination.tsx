import { createSlice } from '@reduxjs/toolkit';

const initialState: { page: number; limit: 5 | 10 | 20; query: string } = {
  page: 1,
  limit: 20,
  query: '',
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setLimit(state, action) {
      state.limit = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const paginationActions = paginationSlice.actions;

export default paginationSlice.reducer;
