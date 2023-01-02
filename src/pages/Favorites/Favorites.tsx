import { useSelector } from 'react-redux';
import Beer, { IBeer } from '../../components/Beer/Beer';
import ListingWrapper from '../../components/ListingWrapper/ListingWrapper';
import { IRootState } from '../../store';

const Favorites = () => {
  const favorites = useSelector((state: IRootState) => state.favorites.favorites);

  return (
    <div>
      {!favorites.length && <h1>You don't have any favorites yet!</h1>}
      {favorites && (
        <ListingWrapper>
          {favorites.map((im: IBeer) => (
            <Beer key={im.id} id={im.id} name={im.name} image_url={im.image_url} />
          ))}
        </ListingWrapper>
      )}
    </div>
  );
};

export default Favorites;
