import React, { useRef } from 'react';
import classNames from 'classnames';
import useQueryURL from './hooks/useQueryURL';

export default function InputSearch({ className = '' }) {
  const input = useRef();
  const { query: { text = '' }, addQuery } = useQueryURL();

  const onSubmit = (e) => {
    e.preventDefault();

    const { value = '' } = input.current;
    addQuery({ text: value.trim() });
  };

  return (
    <form className={classNames(className)} onSubmit={onSubmit}>
      <div className="row">
        <div className="col-12 d-flex group-fields">
          <input ref={input} type="text" defaultValue={text} />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    </form>
  );
}