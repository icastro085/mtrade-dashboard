import { useState, useEffect } from 'react';

import CategoryModel from '../model/Category';
import {
  getCategory as getCategoryDM,
  addCategory,
  updateCategory,
} from '../facades/mtrade-data-management';

const formatter = (category) => {
  const result = JSON.parse(JSON.stringify(category));
  delete result._id;
  delete result.children;
  return result;
};

export default function useCategory({ id }) {
  const [category, setCategory] = useState({ ...CategoryModel });
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(id !== 'registry');

  const getCategory = () => getCategoryDM({ categoryId: id });
  const saveCategory = async () => {
    const categoryId = category._id;
    const result = formatter(category);

    return (categoryId)
      ? updateCategory({ categoryId, category: result })
      : addCategory({ category: result });
  };

  useEffect(() => {
    const onGetResource = async () => {
      try {
        if (id === 'registry') {
          setCategory({ ...CategoryModel });
        } else {
          const { category: result, error: errorResult } = await getCategory();
          setIsLoading(false);

          if (errorResult) {
            setError(errorResult);
          } else {
            setCategory(result);
          }
        }
      } catch (e) {
        setIsLoading(false);
        setError(e.message);
      }
    };

    onGetResource();
  }, [id]);

  return {
    error,
    isLoading,
    category,
    setCategory,
    getCategory,
    saveCategory,
  };
}
