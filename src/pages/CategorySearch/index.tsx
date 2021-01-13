import React, { useEffect } from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import useGraphqlQuery from '../../hooks/useGraphqlQuery';
import useQueryURL from '../../hooks/useQueryURL';

import { t } from '../../locale';

import ControlBar from '../../components/ControlBar';
import Pagination from '../../components/Pagination';

import CategorySearchTable from './CategorySearchTable';
import CategoryRegistry from '../CategoryRegistry';
import CategoryDelete from '../CategoryDelete';

export default function CategorySearch() {
  const { query: { page = 0, text = '' } } = useQueryURL();
  const [fetchData, { data: { categories, total } = {} as any, loading, error }] = useGraphqlQuery(
    'GetCategories',
    { page: parseInt(page), name: text },
  );

  const history = useHistory();

  const onClickRegistry = () => {
    history.push('/category/create');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ControlBar
        icon={<i className="fas fa-sitemap" />}
        title="category.title">
        <button title={t('buttons.new')} type="button" className="primary" onClick={onClickRegistry}>
          <i className="fas fa-plus mr-2" /> {t('buttons.new')}
        </button>
      </ControlBar>

      {
        error
          ? <p>{t('table.error-loading', { error: error?.fetchError })}</p>
          : (
            categories?.length
              ? <CategorySearchTable categories={categories} />
              : (
                loading
                  ? <p>{t('table.loading')}</p>
                  : <p>{t('table.no-results')}</p>
              )
          )
      }
      <Pagination totalItems={total} />

      <Switch>
        <Route exact path="/category/create"><CategoryRegistry /></Route>
        <Route exact path="/category/edit/:id"><CategoryRegistry /></Route>
        <Route exact path="/category/delete/:id"><CategoryDelete /></Route>
      </Switch>
    </>
  );
}
