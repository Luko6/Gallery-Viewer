import { AnyAction, createSlice, Dispatch } from '@reduxjs/toolkit';
import { IBeer } from '../components/Beer/Beer';
import { MAX_ITEMS, paginationActions } from './pagination';

const initialState: { beers: IBeer[]; errorMessage: string } = {
  beers: [],
  errorMessage: '',
};

const beerSlice = createSlice({
  name: 'beers',
  initialState: initialState,
  reducers: {
    updateBeers(state, action) {
      state.beers = action.payload;
    },
    updateErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export const fetchBeers = (page: number, limit: number, query: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const fetchData = async () => {
      const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${limit}${
        query && '&beer_name=' + query.replace(' ', '_')
      }`;

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error('Could not fetch data');
      }

      const data = await res.json();

      return data;
    };

    const fetchPageCount = async () => {
      const url = `https://api.punkapi.com/v2/beers?beer_name=${query.replace(' ', '_')}&per_page=80`;

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error('Could not fetch page count');
      }

      const data = await res.json();

      return Math.ceil(data.length / limit);
    };

    try {
      const beers = await fetchData();
      let newCount = Math.ceil(MAX_ITEMS / limit);
      if (query !== '') {
        newCount = await fetchPageCount();
      }
      dispatch(paginationActions.updatePageCount(newCount));
      dispatch(beerSlice.actions.updateBeers(beers));

      if (newCount < page) {
        dispatch(paginationActions.updatePage(newCount));
      }
    } catch (err) {
      dispatch(beerSlice.actions.updateErrorMessage(err));
    }
  };
};

export const beersActions = beerSlice.actions;

export default beerSlice.reducer;
