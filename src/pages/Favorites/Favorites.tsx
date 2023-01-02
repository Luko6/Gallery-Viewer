import { useSelector } from 'react-redux';
import Beer, { IBeer } from '../../components/Beer/Beer';
import { IRootState } from '../../store';

const Favorites = () => {
  const favorites = useSelector((state: IRootState) => state.favorites.favorites);

  return (
    <div>
      <ul>
        {!favorites.length && <h1>You don't have any favorites yet!</h1>}
        {favorites.map((im: IBeer) => (
          <Beer key={im.id} id={im.id} name={im.name} image_url={im.image_url} />
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
