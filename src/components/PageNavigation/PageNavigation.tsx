import { Pagination } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useMenu } from '../../hooks/useMenu';
import { IRootState, AppDispatch } from '../../store';
import { paginationActions } from '../../store/pagination';

const PageNavigation = () => {
  /* Pagination */
  const page = useSelector((state: IRootState) => state.pagination.page);
  const { limit, query } = useMenu();

  const dispatch: AppDispatch = useDispatch();

  const setPage = (pageNumber: number) => {
    dispatch(paginationActions.setPage(pageNumber));
  };

  const handlePageChange = (e: any, p: any) => {
    setPage(p);
  };
  /* Pagination */

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        paddingBottom: '2rem',
      }}
    >
      <Pagination page={page} onChange={handlePageChange} count={Math.ceil(325 / limit)} color='primary' />
    </div>
  );
};

export default PageNavigation;
