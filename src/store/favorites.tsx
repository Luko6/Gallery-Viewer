import { createSlice } from '@reduxjs/toolkit';
import { IBeer } from '../components/Beer/Beer';

const storageKey = 'favItems';

const savedFavorites = localStorage.getItem(storageKey);
const initialState: { favorites: IBeer[] } = { favorites: savedFavorites ? JSON.parse(savedFavorites) : [] };

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addFavorite(state, action) {
      const newFav: IBeer = {
        id: action.payload.id,
        image_url: action.payload.image_url,
        name: action.payload.name,
      };

      state.favorites = [...state.favorites, newFav];
      localStorage.setItem(storageKey, JSON.stringify(state.favorites));
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter((fav) => fav.id !== action.payload.id);
      localStorage.setItem(storageKey, JSON.stringify(state.favorites));
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice.reducer;
