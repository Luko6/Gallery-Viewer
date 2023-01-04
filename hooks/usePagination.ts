import { useSelector } from 'react-redux';
import { IRootState } from '../store';

export const usePagination = () => {
  const page = useSelector((state: IRootState) => state.pagination.page);
  const limit = useSelector((state: IRootState) => state.pagination.limit);
  const query = useSelector((state: IRootState) => state.pagination.query);
  const count = useSelector((state: IRootState) => state.pagination.pageCount);

  return {
    page,
    limit,
    query,
    count,
  };
};
