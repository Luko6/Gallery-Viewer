import { Alert, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Loader from '../components/Loader/Loader';
import { AppDispatch } from '../store';
import { fetchBeers } from '../store/beers';
import Menu from '../components/Menu/Menu';
import BeerGrid from '../components/BeerGrid/BeerGrid';
import PageNavigation from '../components/PageNavigation/PageNavigation';
import { useBeers } from '../hooks/useBeers';
import { usePagination } from '../hooks/usePagination';

function HomePage() {
  const { error, beers } = useBeers();
  const { page, limit, query } = usePagination();
  const [loading, setLoading] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchBeers(page, limit, query));
    setLoading(false);
  }, [page, limit, query, dispatch]);

  return (
    <Box style={{ padding: '2rem' }}>
      <Menu />
      {loading && <Loader />}
      {!loading && error && <Alert severity='error'>{error}</Alert>}
      {!loading && beers && <BeerGrid beers={beers} />}
      <PageNavigation />
    </Box>
  );
}

export default HomePage;
