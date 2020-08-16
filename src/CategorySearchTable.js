import React from 'react';
import { useHistory } from 'react-router-dom';

export default function CategorySearchTable({ categories }) {
  const history = useHistory();
  const onEdit = (id) => {
    history.push(`/category/${id}`);
  };

  return (
    <table className="mb-5">
      <thead>
        <tr>
          <th>{__('category.fields.name')}</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {
          categories.map(({ _id, name }) => (
            <tr key={_id}>
              <td>{name}</td>
              <td className="text-right">
                <button type="button" className="mr-2" onClick={() => onEdit(_id)}>
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
