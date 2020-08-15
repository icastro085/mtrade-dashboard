import useQueryURL from './useQueryURL';

export const calculateTotalPages = (totalItems = 0, itemsByPage = 10) => (
  Math.ceil(totalItems / itemsByPage)
);

export default function usePagination({
  totalItems = 0,
  itemsByPage = 10,
} = {}) {
  const { query, addQuery } = useQueryURL();
  const { page = 0 } = query;
  const totaItemsNormalized = totalItems ? Math.abs(totalItems) : 0;
  const itemsByPageNormalized = itemsByPage ? Math.abs(itemsByPage) : 0;
  const totalPages = calculateTotalPages(totaItemsNormalized, itemsByPageNormalized);
  const totalPagesNormalized = totalPages ? totalPages - 1 : 0;

  const currentPage = Math.min(Math.abs(parseInt(page) || 0), totalPagesNormalized);
  const previousPage = Math.max(0, currentPage - 1);
  const nextPage = Math.min(currentPage + 1, totalPagesNormalized);

  const setCurrentPage = (updatedCurrentPage) => {
    addQuery({ page: updatedCurrentPage });
  };

  return {
    currentPage,
    previousPage,
    nextPage,
    setCurrentPage,
    totalPages,
  };
}
