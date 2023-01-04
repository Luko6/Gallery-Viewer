import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IBeer } from '../../components/Beer/Beer';
import FavoriteToggle from '../../components/FavoriteToggle/FavoriteToggle';
import Loader from '../../components/Loader/Loader';

const Detail = () => {
  const { id } = useParams();

  const [beer, setBeer] = useState<IBeer>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
      const data: IBeer[] = await res.json();

      setBeer(data[0]);
    };

    try {
      setLoading(true);
      fetchDetails();
      setLoading(false);
    } catch {
      alert('Something went wrong...');
      setLoading(false);
    }
  }, [id]);

  return (
    <>
      {loading && <Loader />}
      {!loading && beer && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            maxWidth: '1200px',
            margin: '0 auto',
            gap: '1rem',
            padding: '2rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              minWidth: '250px',
              backgroundColor: '#333',
              borderRadius: '5px',
            }}
          >
            <img src={beer.image_url} alt={beer.name} style={{ maxWidth: '250px', maxHeight: '500px' }} />
          </Box>
          <Box>
            <Typography variant='h4' sx={{ mb: '1rem' }}>
              {beer.name}
            </Typography>
            <Typography variant='body1'>{beer.description}</Typography>
            <Typography variant='body1'>
              First brewed in <span style={{ fontWeight: 700 }}>{beer.first_brewed}</span>
            </Typography>
            <Typography sx={{ fontWeight: 700, margin: '1rem 0' }}>Alcohol content: {beer.abv}%</Typography>
            <Typography>{beer.brewers_tips}</Typography>

            <Typography sx={{ margin: '1rem 0' }}>{beer.tagline}</Typography>

            <FavoriteToggle id={beer.id} name={beer.name} image_url={beer.image_url} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Detail;
