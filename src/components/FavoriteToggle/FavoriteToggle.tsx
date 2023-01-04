import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { favoriteActions } from '../../store/favorites';
import { IBeer } from '../Beer/Beer';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const FavoriteToggle = (props: IBeer) => {
  const favorites = useSelector((state: IRootState) => state.favorites.favorites);

  const dispatch = useDispatch();

  const isFavorite = (id: number) => {
    return !!favorites.filter((fav) => fav.id === id).length;
  };

  const handleFavorite = () => {
    isFavorite(props.id)
      ? dispatch(favoriteActions.removeFavorite({ id: props.id }))
      : dispatch(favoriteActions.addFavorite(props));
  };

  return (
    <Button
      data-testid='favbutton'
      onClick={handleFavorite}
      variant='outlined'
      color={isFavorite(props.id) ? 'error' : 'warning'}
    >
      <FavoriteIcon sx={isFavorite(props.id) ? { color: 'red' } : { color: 'white' }} />
      <Typography sx={{ marginLeft: '0.5rem' }} data-testid='favtext'>
        {isFavorite(props.id) ? 'Remove Favorite' : 'Favorite'}
      </Typography>
    </Button>
  );
};

export default FavoriteToggle;
