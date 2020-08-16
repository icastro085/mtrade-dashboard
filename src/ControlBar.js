import React from 'react';
import InputSearch from './InputSearch';

export default function ControlBar({ title, showSearchInput = true, children }) {
  return (
    <>
      <h1>{__(title)}</h1>

      <hr />

      <div className="row">
        {showSearchInput ? <InputSearch className="col-6" /> : null}
        <div className="col-6 text-right">
          {children}
        </div>
      </div>

      <hr />
    </>
  );
}
