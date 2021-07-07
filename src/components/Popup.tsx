import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
  onClickExit?: () => void;
  children: any;
}

export default function Popup({ children, className = 'side', onClickExit }: Props) {
  return (
    <>
      <div className="popup-background-layer">&nbsp;</div>
      <div className="popup-content" role="button" tabIndex={0}>
        <div className={classNames('popup-content-layer', className)}>
          {children}
        </div>
      </div>
    </>
  );
}
