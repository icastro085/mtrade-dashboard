import axios from 'axios';
import schema from '../graphql/schema.graphql';

export const LIMIT_BY_PAGE = 10;

const mtradeDMInstance = axios.create({
  baseURL: 'http://localhost:4000/data-resource',
  timeout: 1000,
  headers: { Authorization: 'Bearer TOKE_TEST' },
  transformResponse: [(response) => {
    const { data = {}, errors } = JSON.parse(response);

    if (errors) {
      throw new Error(errors.map(({ message }) => message).join(', '));
    }

    return data;
  }],
});

const mtradeDM = async ({ operationName, variables = {} }) => {
  const { data } = await mtradeDMInstance.post('/', {
    query: schema,
    operationName,
    variables: {
      ...variables,
      limit: LIMIT_BY_PAGE,
    },
  });

  return data;
};

export const addCategory = async (variables = {}) => mtradeDM({
  operationName: 'AddCategory',
  variables,
});

export const updateCategory = async (variables = {}) => mtradeDM({
  operationName: 'UpdateCategory',
  variables,
});

export const getCategory = async (variables = {}) => mtradeDM({
  operationName: 'GetCategoryById',
  variables,
});

export const getCategories = async (variables = {}) => mtradeDM({
  operationName: 'GetCategories',
  variables,
});

export default mtradeDM;
