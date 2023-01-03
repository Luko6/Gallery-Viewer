import { Grid } from '@mui/material';
import Beer, { IBeer } from '../Beer/Beer';

const BeerGrid = (props: { beers: IBeer[] }) => {
  return (
    <Grid container spacing={1.5}>
      {props.beers.map((beer) => {
        return (
          <Grid item xs={12 / 2} lg={12 / 5} md={12 / 3}>
            <Beer key={beer.id} id={beer.id} name={beer.name} image_url={beer.image_url} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BeerGrid;
