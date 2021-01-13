import { useMutation } from 'graphql-hooks';
import schema from '../graphql/schema.graphql';

export default function useGraphqlMutation(operationName: string): any {
  const [save, ...rest] = useMutation(schema, { operationName });
  const saveData = (variables: any) => save({ variables });

  return [saveData, ...rest];
}
