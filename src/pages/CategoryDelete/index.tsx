import React from 'react';
import { useHistory } from 'react-router-dom';
import Popup from '../../components/Popup';

export default function CategoryDelete() {
  const history = useHistory();

  const onClickExit = () => {
    history.push('/category');
  };

  return (
    <Popup onClickExit={onClickExit} className="modal">
      asfasdfasdfasdfasdf
    </Popup>
  );
}
