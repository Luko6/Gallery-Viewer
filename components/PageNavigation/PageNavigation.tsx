import { Box, Pagination } from '@mui/material';
import { useDispatch } from 'react-redux';
import { usePagination } from '../../hooks/usePagination';
import { AppDispatch } from '../../store';
import { paginationActions } from '../../store/pagination';

const PageNavigation = () => {
  const { page, count } = usePagination();

  const dispatch: AppDispatch = useDispatch();

  const handlePageChange = (e: any, p: any) => {
    dispatch(paginationActions.updatePage(p));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        paddingBottom: '2rem',
        paddingTop: '2rem',
      }}
    >
      <Pagination page={page} onChange={handlePageChange} count={count} color='primary' />
    </Box>
  );
};

export default PageNavigation;
