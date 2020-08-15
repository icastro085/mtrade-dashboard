import React from 'react';
import useCategories from './hooks/useCategories';

import Pagination from './Pagination';

export default function CategorySearch() {
  const { isLoading, error, data } = useCategories();

  if (isLoading) {
    return 'Loading...';
  }

  if (error) {
    return `An error has occurred: ${error.message}`;
  }

  const { categories = [], total = 0 } = data;

  return (
    <>
      <table className="mb-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {
            categories.map(({ _id, name }) => (
              <tr key={_id}>
                <td>{name}</td>
                <td className="text-right">
                  <button type="button" className="mr-2">
                    <i className="fas fa-edit mr-2" /> Edit
                  </button>
                  <button type="button">
                    <i className="fas fa-trash-alt mr-2" />Remove
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <Pagination totalItems={total} />
    </>
  );
}
