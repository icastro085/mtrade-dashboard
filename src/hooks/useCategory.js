import {
  getCategory,
  getCategories,
  addCategory,
  updateCategory,
} from '../facades/mtrade-data-management';

const formatter = (category) => {
  const result = JSON.parse(JSON.stringify(category));
  delete result._id;
  delete result.children;
  return result;
};

export default function useCategory() {
  const saveCategory = async (category) => {
    const categoryId = category._id;
    const result = formatter(category);

    return (categoryId)
      ? updateCategory({ categoryId, category: result })
      : addCategory({ category: result });
  };

  return {
    getCategory,
    getCategories,
    saveCategory,
  };
}
