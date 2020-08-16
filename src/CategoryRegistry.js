import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useCategory from './hooks/useCategory';
import useCategories from './hooks/useCategories';

import BarControl from './ControlBar';
import Select from './Select';

export default function CategoryRegistry() {
  const { id: categoryId } = useParams();
  const history = useHistory();

  const { data = {} } = useCategories();
  const {
    category,
    setCategory,
    saveCategory,
    error,
    setError,
  } = useCategory({ id: categoryId });

  const onClickBack = () => {
    history.push('/category');
  };

  const onClickRegistry = () => {
    history.push('/category/registry');
  };

  const onClickSave = async () => {
    try {
      const {
        category: categoryResponse,
        error: categoryError,
      } = await saveCategory(category);

      if (categoryError) {
        setError(categoryError);
      } else {
        setCategory(categoryResponse);
        toastr.success(__('toast.success'));
      }
    } catch (e) {
      setError(e.message);
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

  useEffect(() => {
    if (error) {
      toastr.error(error);
    }
  }, [error]);

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
