import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import paginationReducer from './pagination';

const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
