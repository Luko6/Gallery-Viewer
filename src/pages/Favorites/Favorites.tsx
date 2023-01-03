import { useSelector } from 'react-redux';
import BeerGrid from '../../components/BeerGrid/BeerGrid';
import { IRootState } from '../../store';

const Favorites = () => {
  const favorites = useSelector((state: IRootState) => state.favorites.favorites);

  return (
    <div style={{ padding: '2rem' }}>
      {!favorites.length && <h1>You don't have any favorites yet!</h1>}
      {favorites && <BeerGrid beers={favorites} />}
    </div>
  );
};

export default Favorites;
