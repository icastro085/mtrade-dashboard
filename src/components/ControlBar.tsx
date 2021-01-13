import React from 'react';
import classNames from 'classnames';
import InputSearch from './InputSearch';
import { t } from '../locale';

interface Props {
  icon: any;
  title: string;
  showSearchInput?: boolean;
  children: any;
}

export default function ControlBar({
  icon = null,
  title,
  showSearchInput = true,
  children,
}: Props) {
  return (
    <>
      <h1>{icon} {t(title)}</h1>

      <hr />

      <div className="row">
        {
          showSearchInput
            ? (
              <InputSearch className="col-6" />
            )
            : null
        }
        <div className={classNames('d-flex justify-content', {
          'col-6 flex-end': showSearchInput,
          'col-12  space-between': !showSearchInput,
        })}>
          {children}
        </div>
      </div>

      <hr />
    </>
  );
}
