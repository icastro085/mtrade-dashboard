import React from 'react';
import classNames from 'classnames';
import InputSearch from './InputSearch';

export default function ControlBar({
  icon = null,
  title,
  showSearchInput = true,
  children,
}) {
  return (
    <>
      <h1>{icon} {__(title)}</h1>

      <hr />

      <div className="row">
        {
          showSearchInput
            ? (
              <InputSearch className="col-6" />
            )
            : null
        }
        <div className={classNames('text-right', {
          'col-6': showSearchInput,
          'col-12': !showSearchInput,
        })}>
          {children}
        </div>
      </div>

      <hr />
    </>
  );
}
