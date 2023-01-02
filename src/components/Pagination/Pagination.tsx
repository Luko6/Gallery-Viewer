import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, IRootState } from '../../store';
import { paginationActions } from '../../store/pagination';

const Pagination = () => {
  const limit = useSelector((state: IRootState) => state.pagination.limit);
  const page = useSelector((state: IRootState) => state.pagination.page);

  const queryRef = useRef<HTMLInputElement>(null);

  const dispatch: AppDispatch = useDispatch();

  const setPage = (pageNumber: number) => {
    dispatch(paginationActions.setPage(pageNumber));
  };

  const setLimit = (limitNumber: number) => {
    dispatch(paginationActions.setLimit(limitNumber));
  };

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
      <label>
        Name:
        <input ref={queryRef} type='text' />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleReset}>Reset</button>
      </label>
    </div>
  );
};

export default Pagination;
