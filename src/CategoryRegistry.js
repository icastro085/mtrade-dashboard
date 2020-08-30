import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import classNames from 'classnames';

import useCategory from './hooks/useCategory';

import BarControl from './ControlBar';
import Select from './Select';
import Loading from './Loading';

import CategoryModel from './model/Category';

export default function CategoryRegistry() {
  const history = useHistory();
  const { id } = useParams();

  const { getCategory, getCategories, saveCategory } = useCategory();

  const [
    mutate,
    {
      status: mstatus,
      error: merror,
      data,
    },
  ] = useMutation(async (categoryToSave) => {
    const {
      category: categoryResponse,
      error: categoryError,
    } = await saveCategory(categoryToSave);

    if (categoryError) {
      throw new Error(categoryError);
    }

    return categoryResponse;
  });

  const {
    status: qstatus,
    error: qerror,
    data: {
      category = { ...CategoryModel },
      categories = [],
    } = {},
  } = useQuery(
    ['GetCategory', id],
    async (_, categoryId) => {
      const { category: c } = (categoryId === 'registry')
        ? { category: { ...CategoryModel } }
        : await getCategory({ categoryId });

      const { categories: cs = [] } = await getCategories();

      return {
        category: c,
        categories: cs,
      };
    },
  );

  const onClickBack = () => {
    history.push('/category');
  };

  const onClickRegistry = () => {
    history.push('/category/registry');
  };

  const onClickSave = async () => {
    await mutate(category);
  };

  const onChangeSelect = (parentId) => {
    category.parent = { _id: parentId };
  };

  const onChangeName = ({ target }) => {
    category.name = target.value;
  };

  // mutation
  useEffect(() => {
    if (mstatus === 'success') {
      category._id = data._id;
      toastr.success(__('toast.success'));
    } else if (mstatus === 'error') {
      toastr.error(__('toast.internal-error', { error: merror }));
    }
  }, [mstatus]);

  // query
  useEffect(() => {
    if (qstatus === 'error') {
      toastr.error(__('toast.internal-error', { error: qerror }));
    }
  }, [qstatus]);

  return (
    <>
      {
        (qstatus === 'loading')
          ? <Loading />
          : null
      }

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

        <button
          type="button"
          className={classNames(
            'primary',
            {
              disabled: [qstatus, mstatus].some((element) => ['loading', 'error'].includes(element)),
            },
          )}
          onClick={onClickSave}>
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
              defaultValue={category.name}
              onChange={onChangeName}
              placeholder={__('category.field-placeholder.name')} />
          </div>
        </div>
      </form>
    </>
  );
}
