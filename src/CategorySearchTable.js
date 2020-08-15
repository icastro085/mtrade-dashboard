import React from 'react';

export default function CategorySearchTable({ categories }) {
  return (
    <table className="mb-5">
      <thead>
        <tr>
          <th>{__('category.table.header.name')}</th>
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
                  <i className="fas fa-edit mr-1" /> {__('table.buttons.edit')}
                </button>
                <button type="button">
                  <i className="fas fa-trash-alt mr-1" /> {__('table.buttons.remove')}
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
