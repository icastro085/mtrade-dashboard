import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';

interface IReturned {
  query: any,
  addQuery: (queryToReplace: any) => void,
}

export default function useQueryURL(): IReturned {
  const location = useLocation();
  const history = useHistory();
  const query = queryString.parse(location.search);

  const addQuery = (queryToReplace: any) => {
    Object.keys(queryToReplace).forEach((name) => {
      const value = queryToReplace[name];

      if (!value) {
        delete query[name];
      } else {
        query[name] = queryToReplace[name];
      }
    });

    history.push({
      pathname: location.pathname,
      search: `?${queryString.stringify(query)}`,
    });
  };

  return {
    query,
    addQuery,
  };
}
