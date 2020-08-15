import axios from 'axios';
import schema from '../graphql/schema.graphql';

const mtradeDM = axios.create({
  baseURL: 'http://localhost:4000/data-resource',
  timeout: 1000,
  headers: { Authorization: 'Bearer TOKE_TEST' },
});

export default async ({ operationName, variables = {} }) => {
  const { data } = await mtradeDM.post('/', {
    query: schema,
    operationName,
    variables,
  });

  console.log(data);
};
