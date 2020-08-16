import React from 'react';
import { useHistory } from 'react-router-dom';
import useCategories from './hooks/useCategories';

import BarControl from './ControlBar';
import Select from './Select';

import CategoryModel from './model/Category';

export default function CategoryRegistry() {
  const history = useHistory();
  const { data = {} } = useCategories();

  const onClickBack = () => {
    history.push('/category');
  };

  const onClickRegistry = () => {
    history.push('/category/registry');
  };

  const onClickSave = () => {
    console.log('safasdfasdfad');
  };

  const onChangeSelect = (parentId, valueSelected) => {
    console.log(parentId, valueSelected, CategoryModel);
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
              placeholder={__('category.field-placeholder.name')} />
          </div>
        </div>
      </form>
    </>
  );
}
