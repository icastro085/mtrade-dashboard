import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <a href="/#/">{__('app.title')}</a>

      <div className="options">
        <div className="user">
          <i className="fas fa-user" />
        </div>
      </div>
    </header>
  );
}
