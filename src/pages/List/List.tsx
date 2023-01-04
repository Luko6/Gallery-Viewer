import { useEffect, useState } from 'react';
import Menu from '../../components/Menu/Menu';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import BeerGrid from '../../components/BeerGrid/BeerGrid';
import PageNavigation from '../../components/PageNavigation/PageNavigation';
import { Alert, Box } from '@mui/material';
import Loader from '../../components/Loader/Loader';
import { fetchBeers } from '../../store/beers';
import { useBeers } from '../../hooks/useBeers';
import { usePagination } from '../../hooks/usePagination';

const List = () => {
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
};

export default List;
