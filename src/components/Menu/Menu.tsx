import { Box, Button, Select, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { usePagination } from '../../hooks/usePagination';
import { AppDispatch } from '../../store';
import { paginationActions } from '../../store/pagination';

const Menu = () => {
  const { limit } = usePagination();

  const queryRef = useRef<HTMLInputElement>(null);

  const dispatch: AppDispatch = useDispatch();

  const handleSearch = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(paginationActions.updateQuery(queryRef.current?.value));
  };

  const handleReset = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (queryRef.current) {
      dispatch(paginationActions.updateQuery(''));
      queryRef.current.value = '';
    }
  };

  const handleLimit = (e: any) => {
    dispatch(paginationActions.updateLimit(e.target.value));
  };

  return (
    <Box sx={{ marginBottom: '2rem' }}>
      <Toolbar
        disableGutters
        sx={{
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'start' },
          rowGap: '1rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            justifyContent: { xs: 'space-between' },
            width: { xs: '100%', sm: 'unset' },
          }}
        >
          <TextField
            inputRef={queryRef}
            label='Search by Name'
            variant='outlined'
            data-testid='query'
            sx={{ width: '100%' }}
          />
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button variant='contained' onClick={handleSearch}>
              Search
            </Button>
            <Button variant='contained' onClick={handleReset} color='error' data-testid="resetbutton">
              Reset
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: { xs: '100%', sm: 'unset' } }}>
          <FormControl sx={{ width: { xs: '100%', sm: 'unset' } }}>
            <InputLabel id='limit-label'>Limit</InputLabel>
            <Select
              labelId='limit-label'
              data-testid='limit'
              value={limit}
              label='Limit'
              onChange={handleLimit}
              sx={{ width: { xs: '100%', sm: '140px' } }}
            >
              <MenuItem data-testid='limit-5' value={5}>
                5
              </MenuItem>
              <MenuItem data-testid='limit-10' value={10}>
                10
              </MenuItem>
              <MenuItem data-testid='limit-20' value={20}>
                20
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Menu;
