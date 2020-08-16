import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useCategories from './hooks/useCategories';
import useCategoryMutation from './hooks/useCategoryMutation';

import BarControl from './ControlBar';
import Select from './Select';

import CategoryModel from './model/Category';

const { error } = console;

export default function CategoryRegistry() {
  const history = useHistory();
  const { data = {} } = useCategories();
  const [category, setCategory] = useState({ ...CategoryModel });
  const [mutation] = useCategoryMutation();

  const onClickBack = () => {
    history.push('/category');
  };

  const onClickRegistry = () => {
    history.push('/category/registry');
  };

  const onClickSave = async () => {
    try {
      const {
        category: categoryResponse = {},
        error: categoryError,
      } = await mutation(category);

      if (categoryError) {
        error(categoryError);
      } else {
        setCategory(categoryResponse);
      }
    } catch (e) {
      error(e);
    }
  };

  const onChangeSelect = (parentId) => {
    category.parent = {
      _id: parentId,
    };
    setCategory({ ...category });
  };

  const onChangeName = ({ target }) => {
    category.name = target.value;
    setCategory({ ...category });
  };

  const { categories = [] } = data;

  return (
    <>
      <BarControl
        icon={<i className="fas fa-sitemap" />}
        title="category.title"
        showSearchInput={false}>

        <button type="button" className="mr-3" onClick={onClickBack}>
          <i className="fas fa-arrow-left mr-2" /> {__('buttons.back')}
        </button>

        <button type="button" className="mr-3" onClick={onClickRegistry}>
          <i className="fas fa-plus mr-2" /> {__('buttons.new')}
        </button>

        <button type="button" className="primary" onClick={onClickSave}>
          <i className="fas fa-save mr-2" /> {__('buttons.save')}
        </button>
      </BarControl>

      <form>
        <div className="row">
          <div className="col-6">
            <Select
              value={(category.parent || {})._id}
              onChange={onChangeSelect}
              placeholder={__('category.field-placeholder.parent')}
              items={categories.map(({ _id, name }) => ({ id: _id, value: name }))}>
              {__('category.fields.parent')}
            </Select>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <label>{__('category.fields.name')}</label>
            <input
              type="text"
              value={category.name}
              onChange={onChangeName}
              placeholder={__('category.field-placeholder.name')} />
          </div>
        </div>
      </form>
    </>
  );
}
