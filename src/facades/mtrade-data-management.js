import axios from 'axios';
import schema from '../graphql/schema.graphql';

export const LIMIT_BY_PAGE = 10;

const mtradeDMInstance = axios.create({
  baseURL: 'http://localhost:4000/data-resource',
  timeout: 1000,
  headers: { Authorization: 'Bearer TOKE_TEST' },
  transformResponse: [(response) => {
    const { data = {} } = JSON.parse(response);
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

export const getCategories = async (variables = {}) => mtradeDM({
  operationName: 'GetCategories',
  variables,
});

export default mtradeDM;
