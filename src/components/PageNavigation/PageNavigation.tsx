import { Box, Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMenu } from '../../hooks/useMenu';
import { IRootState, AppDispatch } from '../../store';
import { paginationActions } from '../../store/pagination';

const PageNavigation = () => {
  const page = useSelector((state: IRootState) => state.pagination.page);
  const { limit, query } = useMenu();
  const [count, setCount] = useState(Math.ceil(325 / limit));

  const dispatch: AppDispatch = useDispatch();

  const setPage = (pageNumber: number) => {
    dispatch(paginationActions.setPage(pageNumber));
  };

  const handlePageChange = (e: any, p: any) => {
    setPage(p);
  };

  useEffect(() => {
    const getLimit = async () => {
      const url = `https://api.punkapi.com/v2/beers?beer_name=${query.replace(' ', '_')}&per_page=80`;
      const res = await fetch(url);
      const data = await res.json();

      setCount(Math.ceil(data.length / limit));
    };

    try {
      if (!!query) {
        getLimit();
      } else {
        setCount(Math.ceil(325 / limit));
      }
    } catch {
      alert('Something went wrong');
    }
  }, [query, limit]);

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        paddingBottom: '2rem',
      }}
    >
      <Pagination page={page} onChange={handlePageChange} count={count} color='primary' />
    </Box>
  );
};

export default PageNavigation;
