import React, { useEffect, useState } from 'react';
import { Alert, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import BeerGrid from '../../components/BeerGrid/BeerGrid';
import { IRootState } from '../../store';
import { IBeer } from '../../components/Beer/Beer';

function FavoritesPage() {
  const [favorites, setFavorites] = useState<IBeer[]>([]);
  const storedFavorites = useSelector((state: IRootState) => state.favorites.favorites);

  useEffect(() => {
    setFavorites(storedFavorites);
  }, [storedFavorites]);

  return (
    <Box sx={{ padding: '2rem' }}>
      {!favorites.length && <Alert severity='info'>You don't have any favorites yet!</Alert>}
      {favorites && <BeerGrid beers={favorites} />}
    </Box>
  );
}

export default FavoritesPage;
