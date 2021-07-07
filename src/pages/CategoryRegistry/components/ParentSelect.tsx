import React, { useEffect } from 'react';

import { t } from '../../../locale';

import useGraphqlQuery from '../../../hooks/useGraphqlQuery';
import { ICategory } from '../../../models/Category';

import SelectForm from '../../../components/SelectForm';
import { IItems } from '../../../components/Select';

export default function ParentSelect() {
  const [fetchData, { data }] = useGraphqlQuery('GetCategories');
  const { categories } = data || {};

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SelectForm
      name="parentId"
      placeholder={t('category.field-placeholder.parent')}
      items={categories?.map(({ _id, name }: ICategory): IItems => ({
        id: _id,
        value: name,
      }))}>
      {t('category.fields.parent')}
    </SelectForm>
  );
}
