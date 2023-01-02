import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { favoriteActions } from '../../store/favorites';

const FavoriteToggle = (props: { id: number }) => {
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
    <div
      onClick={handleFavorite}
      style={
        isFavorite(props.id)
          ? { backgroundColor: 'yellow', width: '30px', color: 'black', cursor: 'pointer' }
          : { backgroundColor: 'gray', width: '30px', color: 'black', cursor: 'pointer' }
      }
    >
      FAV
    </div>
  );
};

export default FavoriteToggle;
