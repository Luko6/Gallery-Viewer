import { createSlice } from '@reduxjs/toolkit';

const initialState: { page: number; limit: number; query: string } = {
  page: 1,
  limit: 25,
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
