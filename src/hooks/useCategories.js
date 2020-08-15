import { useQuery } from 'react-query';
import { getCategories } from '../facades/mtrade-data-management';
import useQueryURL from './useQueryURL';

export default function useCategories() {
  const { query: { page: currentPage = 0 } } = useQueryURL();
  return useQuery(
    ['GetCategories', parseInt(currentPage)],
    (_, page) => getCategories({ page }),
  );
}
