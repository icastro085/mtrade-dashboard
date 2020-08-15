import React, { useEffect } from 'react';
import mtradeDM from './facades/mtrade-data-management';

export default function CategorySearch() {
  useEffect(() => {
    mtradeDM({
      operationName: 'GetCategories',
      variables: {},
    });
  }, []);

  return (
    <div>asfasdasdfasdf</div>
  );
}
