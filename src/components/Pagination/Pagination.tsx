import React, { useRef } from 'react';
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

  const handleLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(paginationActions.setLimit(e.currentTarget.value));
  };

  return (
    <div>
      <label>
        Page:
        <input value={page} type='number' onChange={(e) => setPage(+e.currentTarget.value)} />
      </label>
      <label>
        Items per page:
        <select onChange={handleLimit} value={limit} style={{ width: '100px' }}>
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
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
