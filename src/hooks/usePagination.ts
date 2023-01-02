import { useSelector } from 'react-redux';
import { IRootState } from '../store';

export const usePagination = () => {
  const limit = useSelector((state: IRootState) => state.pagination.limit);
  const page = useSelector((state: IRootState) => state.pagination.page);
  const query = useSelector((state: IRootState) => state.pagination.query);

  return {
    limit,
    page,
    query,
  };
};
