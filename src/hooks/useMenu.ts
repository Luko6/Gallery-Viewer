import { useSelector } from 'react-redux';
import { IRootState } from '../store';

export const useMenu = () => {
  const limit = useSelector((state: IRootState) => state.pagination.limit);
  const query = useSelector((state: IRootState) => state.pagination.query);

  return {
    limit,
    query,
  };
};
