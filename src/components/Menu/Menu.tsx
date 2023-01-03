import { Button, Select, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState, AppDispatch } from '../../store';
import { paginationActions } from '../../store/pagination';

const Menu = () => {
  const limit = useSelector((state: IRootState) => state.pagination.limit);
  const queryRef = useRef<HTMLInputElement>(null);

  const dispatch: AppDispatch = useDispatch();

  const handleSearch = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(paginationActions.setQuery(queryRef.current?.value));
  };

  const handleReset = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(paginationActions.setQuery(''));

    if (queryRef.current) {
      queryRef.current.value = '';
    }
  };

  const handleLimit = (e: any) => {
    dispatch(paginationActions.setLimit(e.target.value));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <FormControl>
        <InputLabel id='limit-label'>Limit</InputLabel>
        <Select
          labelId='limit-label'
          data-testid='limit'
          value={limit}
          label='Limit'
          onChange={handleLimit}
          style={{ width: '80px' }}
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
      <div style={{ display: 'flex', gap: '1rem' }}>
        <TextField inputRef={queryRef} label='Name' variant='outlined' data-testid='query' />
        <Button variant='contained' onClick={handleSearch}>
          Search
        </Button>
        <Button variant='contained' onClick={handleReset} color='error'>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Menu;
