import { useEffect, useState } from 'react';

import { IBeer } from '../../components/Beer/Beer';
import Menu from '../../components/Menu/Menu';
import { useMenu } from '../../hooks/useMenu';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import BeerGrid from '../../components/BeerGrid/BeerGrid';
import PageNavigation from '../../components/PageNavigation/PageNavigation';
import { Box } from '@mui/material';
import Loader from '../../components/Loader/Loader';

const List = () => {
  const { limit, query } = useMenu();
  const [loading, setLoading] = useState(false);
  const [beers, setBeers] = useState<IBeer[]>();

  const page = useSelector((state: IRootState) => state.pagination.page);

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
      alert(`No beers with the name "${query}"`);
      setLoading(false);
    }
  }, [page, limit, query]);

  return (
    <>
      <Box style={{ padding: '2rem' }}>
        <Menu />
        {loading && <Loader />}
        {!loading && beers && <BeerGrid beers={beers} />}
      </Box>
      <PageNavigation />
    </>
  );
};

export default List;
