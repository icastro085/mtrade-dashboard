import React from 'react';
import { t } from 'locale';

export default function Header() {
  return (
    <header className="header">
      <a href="/#/">{t('app.title')}</a>

      <div className="options">
        <div className="user">
          <i className="fas fa-user" />
        </div>
      </div>
    </header>
  );
}
