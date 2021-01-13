import React from 'react';
import { useHistory } from 'react-router-dom';
import { ICategory } from '../../models/Category';
import { t } from '../../locale';

interface Props {
  categories: ICategory[];
}

export default function CategorySearchTable({ categories }: Props) {
  const history = useHistory();
  const onEdit = (id: string) => {
    history.push(`/category/edit/${id}`);
  };

  const onDelete = (id: string) => {
    history.push(`/category/delete/${id}`);
  };

  return (
    <table className="mb-5">
      <thead>
        <tr>
          <th>{t('category.fields.name')}</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {
          categories.map(({ _id, name }: ICategory) => (
            <tr key={_id}>
              <td title={name}>{name}</td>
              <td className="text-right actions">
                <button type="button" className="mr-1" onClick={() => onEdit(_id)} title={t('table.buttons.edit')}>
                  <i className="fas fa-edit" />
                </button>
                <button type="button" onClick={() => onDelete(_id)} title={t('table.buttons.remove')}>
                  <i className="fas fa-trash-alt" />
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
