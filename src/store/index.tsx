import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import paginationReducer from './pagination';
import favoritesReducer from './favorites';

const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
