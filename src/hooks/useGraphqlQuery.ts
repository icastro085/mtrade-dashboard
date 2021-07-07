import { useManualQuery } from 'graphql-hooks';
import schema from '../graphql/schema.graphql';

export const LIMIT_BY_PAGE = 10;

export default function useGraphqlQuery(operationName: string, variables = {}) {
  return useManualQuery(schema, {
    operationName,
    variables: {
      ...variables,
      limit: LIMIT_BY_PAGE,
    },
  });
}
