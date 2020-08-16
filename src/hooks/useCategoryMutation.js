import { useMutation } from 'react-query';
import { addCategory } from '../facades/mtrade-data-management';

export default function useCategoryMutation() {
  return useMutation(async (category = {}) => addCategory({ category }));
}
