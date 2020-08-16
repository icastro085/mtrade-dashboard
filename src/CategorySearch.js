import React from 'react';
import useCategories from './hooks/useCategories';

import BarControl from './ControlBar';
import CategorySearchTable from './CategorySearchTable';
import Pagination from './Pagination';

export default function CategorySearch() {
  const { isLoading, error, data = {} } = useCategories();
  const { categories = [], total = 0 } = data || {};

  return (
    <>
      <BarControl title="category.title">
        <button type="button" className="primary">
          <i className="fas fa-plus mr-2" /> {__('input-search.buttons.create')}
        </button>
      </BarControl>

      {
        error
          ? <p>{__('table.error-loading', { error: error.message })}</p>
          : (
            categories.length
              ? <CategorySearchTable categories={categories} />
              : (
                isLoading
                  ? <p>{__('table.loading')}</p>
                  : <p>{__('table.no-results')}</p>
              )
          )
      }
      <Pagination totalItems={total} />
    </>
  );
}
