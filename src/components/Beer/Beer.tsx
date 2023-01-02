import { NavLink } from 'react-router-dom';
import { Details } from '../../routes';
import FavoriteToggle from '../FavoriteToggle/FavoriteToggle';

export interface IBeer {
  id: number;
  name: string;
  image_url: string;
  description?: string;
  first_brewed?: string;
  brewers_tips?: string;
  abv?: number;
  tagline?: string;
}

const Beer = (props: IBeer) => {
  return (
    <div>
      <FavoriteToggle id={props.id} image_url={props.image_url} name={props.name} />
      <NavLink to={Details + '/' + props.id}>{props.id}</NavLink>
      <img src={props.image_url} alt={props.name} width='60' height='100' />
      <p>{props.name}</p>
    </div>
  );
};

export default Beer;
