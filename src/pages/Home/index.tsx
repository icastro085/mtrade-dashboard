import React from 'react';
import { t } from 'locale';

export default function Home() {
  return (
    <p className="welcome">{t('app.welcome')}</p>
  );
}
