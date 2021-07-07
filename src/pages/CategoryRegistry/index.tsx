import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { t } from '../../locale';

import ControlBarForm from '../../components/ControlBarForm';
import Loading from '../../components/Loading';
import InputTextForm from '../../components/InputTextForm';
import Popup from '../../components/Popup';
import ParentSelect from './components/ParentSelect';

import { ICategory, schema } from '../../models/Category';

import useGraphqlQuery from '../../hooks/useGraphqlQuery';
import useGraphqlMutation from '../../hooks/useGraphqlMutation';

interface IParams {
  id: string;
}

export default function CategoryRegistry() {
  const history = useHistory();
  const { id: categoryId }: IParams = useParams();

  const [
    fetchData,
    { data: qdata, loading: qloading, error: qerror },
  ] = useGraphqlQuery('GetCategoryById', { categoryId });
  const [
    save,
    { loading: mloading, data: mdata, error: merror },
  ] = useGraphqlMutation('SaveCategory');

  const methods = useForm<ICategory>({
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const { handleSubmit, reset, formState: { errors } } = methods;

  const onClickBack = () => {
    history.push('/category');
  };

  const onSubmit: SubmitHandler<ICategory> = async (category: ICategory): Promise<void> => {
    console.log(category);
    return;
    await save({
      categoryId: (mdata || qdata)?.category?._id,
      category,
    });
  };

  useEffect(() => {
    if (categoryId?.length) {
      fetchData();
    }
  }, [categoryId]);

  // mutation
  useEffect(() => {
    if (!mloading && !merror && mdata?.category) {
      toastr.success(t('toast.success'));
      onClickBack();
    } else if (!mloading && merror) {
      toastr.error(t('toast.internal-error', { error: merror?.fetchError }));
      onClickBack();
    }
  }, [mdata, mloading, merror]);

  // query
  useEffect(() => {
    if (qerror && categoryId) {
      toastr.error(t('toast.internal-error', { error: qerror?.fetchError }));
      onClickBack();
    }
  }, [qerror]);

  useEffect(() => {
    if (qdata?.category) {
      reset(qdata?.category);
    }
  }, [qdata]);

  useEffect(() => {
    if (Object.keys(errors).length) {
      toastr.error(t('toast.error-empty-field'));
    }
  }, [errors]);

  return (
    <>
      {(qloading) ? <Loading /> : null}

      <Popup onClickExit={onClickBack}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ControlBarForm
              icon={<i className="fas fa-edit" />}
              title={categoryId ? 'category.title-edit' : 'category.title-create'}
              backPath="/category"
              disabledSaveButton={mloading || merror} />

            <div className="row">
              <div className="col-6">
                <ParentSelect />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <InputTextForm
                  label="category.fields.name"
                  name="name"
                  placeholder="category.field-placeholder.name" />
              </div>
            </div>
          </form>
        </FormProvider>
      </Popup>
    </>
  );
}
