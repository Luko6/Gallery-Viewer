import { useEffect, useState } from 'react';

import { IBeer } from '../../components/Beer/Beer';
import Menu from '../../components/Menu/Menu';
import { useMenu } from '../../hooks/useMenu';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, IRootState } from '../../store';
import { paginationActions } from '../../store/pagination';
import { Pagination } from '@mui/material';
import BeerGrid from '../../components/BeerGrid/BeerGrid';

const List = () => {
  // MaxCount = 325
  const { limit, query } = useMenu();
  const [loading, setLoading] = useState(false);
  const [beers, setBeers] = useState<IBeer[]>();

  /* Pagination */
  const page = useSelector((state: IRootState) => state.pagination.page);

  const dispatch: AppDispatch = useDispatch();

  const setPage = (pageNumber: number) => {
    dispatch(paginationActions.setPage(pageNumber));
  };

  const handlePageChange = (e: any, p: any) => {
    setPage(p);
  };
  /* Pagination */

  useEffect(() => {
    const fetchImages = async () => {
      const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${limit}${
        query && '&beer_name=' + query.replace(' ', '_')
      }`;

      const res = await fetch(url);
      const data = await res.json();

      setBeers(data);
    };

    try {
      setLoading(true);
      fetchImages();
      setLoading(false);
    } catch {
      alert('Failed to fetch beers');
      setLoading(false);
    }
  }, [page, limit, query]);

  return (
    <>
      <div style={{ padding: '2rem' }}>
        <div>
          <Menu />
          {loading && <h2>Loading...</h2>}
          {!loading && !beers?.length && <h2>No beers with name {query}</h2>}
          {!loading && beers && <BeerGrid beers={beers} />}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Pagination page={page} onChange={handlePageChange} count={Math.ceil(325 / limit)} color='primary' />
      </div>
    </>
  );
};

export default List;
