import { Card, CardActions, CardHeader, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
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
    <Card>
      <CardHeader title={<Typography>{props.name}</Typography>} sx={{ height: '80px' }} />
      <NavLink to={Details + '/' + props.id}>
        <CardMedia
          component='img'
          image={props.image_url}
          alt={props.name}
          height={300}
          sx={{ padding: '0.5rem', backgroundColor: '#333' }}
        />
      </NavLink>
      <CardActions>
        <FavoriteToggle id={props.id} name={props.name} image_url={props.image_url} />
      </CardActions>
    </Card>
  );
};

export default Beer;
