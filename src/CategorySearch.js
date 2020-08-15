import React from 'react';
import useCategories from './hooks/useCategories';

import InputSearch from './InputSearch';
import CategorySearchTable from './CategorySearchTable';
import Pagination from './Pagination';

export default function CategorySearch() {
  const { isLoading, error, data = {} } = useCategories();
  const { categories = [], total = 0 } = data || {};

  return (
    <>
      <InputSearch />

      <hr />

      {
        error
          ? <p>{`An error has occurred: ${error.message}`}</p>
          : (
            categories.length
              ? <CategorySearchTable categories={categories} />
              : (
                isLoading
                  ? <p>Loading...</p>
                  : <p>There is no results</p>
              )
          )
      }
      <Pagination totalItems={total} />
    </>
  );
}
