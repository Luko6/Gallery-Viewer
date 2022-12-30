import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, IRootState } from '../../store';
import { paginationActions } from '../../store/pagination';

const Pagination = () => {
  const limit = useSelector((state: IRootState) => state.pagination.limit);
  const page = useSelector((state: IRootState) => state.pagination.page);

  const dispatch: AppDispatch = useDispatch();

  const setPage = (pageNumber: number) => {
    dispatch(paginationActions.setPage(pageNumber));
  };

  const setLimit = (limitNumber: number) => {
    dispatch(paginationActions.setLimit(limitNumber));
  };

  return (
    <div>
      <label>
        Page:
        <input value={page} type='number' onChange={(e) => setPage(+e.currentTarget.value)} />
      </label>
      <label>
        Limit:
        <input value={limit} type='number' onChange={(e) => setLimit(+e.currentTarget.value)} />
      </label>
    </div>
  );
};

export default Pagination;
