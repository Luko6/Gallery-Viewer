import { useSelector } from 'react-redux';
import { IRootState } from '../store';

export const usePagination = () => {
  const page = useSelector((state: IRootState) => state.pagination.page);

  return {
    page,
  };
};
