import { useSelector } from 'react-redux';
import { IRootState } from '../store';

export const useBeers = () => {
  const error = useSelector((state: IRootState) => state.beers.errorMessage);
  const beers = useSelector((state: IRootState) => state.beers.beers);

  return {
    error,
    beers,
  };
};
