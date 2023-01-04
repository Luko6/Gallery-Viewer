import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
