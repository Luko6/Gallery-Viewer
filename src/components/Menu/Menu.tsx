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

  const handleLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(paginationActions.setLimit(e.currentTarget.value));
  };

  return (
    <div>
      <label>
        Items per page:
        <select onChange={handleLimit} value={limit} style={{ width: '100px' }} data-testid='limit'>
          <option data-testid="limit-5">5</option>
          <option data-testid="limit-10">10</option>
          <option data-testid="limit-20">20</option>
        </select>
      </label>
      <label>
        Name:
        <input ref={queryRef} type='text' data-testid='query' />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleReset}>Reset</button>
      </label>
    </div>
  );
};

export default Menu;
