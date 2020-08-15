import { useQuery } from 'react-query';
import { getCategories } from '../facades/mtrade-data-management';
import useQueryURL from './useQueryURL';

export default function useCategories() {
  const { query: { page: currentPage = 0, text = '' } } = useQueryURL();
  return useQuery(
    ['GetCategories', parseInt(currentPage), text],
    (_, page, name) => getCategories({ page, name }),
  );
}
