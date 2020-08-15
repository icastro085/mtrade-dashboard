import React, { useRef } from 'react';
import useQueryURL from './hooks/useQueryURL';

export default function InputSearch() {
  const input = useRef();
  const { query: { text = '' }, addQuery } = useQueryURL();

  const onSubmit = (e) => {
    e.preventDefault();

    const { value = '' } = input.current;
    addQuery({ text: value.trim() });
  };

  return (
    <form className="form-inline" onSubmit={onSubmit}>
      <div className="row">
        <div className="col-6 group-fields">
          <input ref={input} type="text" defaultValue={text} />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    </form>
  );
}
