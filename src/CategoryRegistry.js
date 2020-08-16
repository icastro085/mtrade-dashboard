import React from 'react';
import BarControl from './ControlBar';

export default function CategoryRegistry() {
  const onClickSave = () => {
    console.log('safasdfasdfad');
  };

  return (
    <>
      <BarControl
        icon={<i className="fas fa-sitemap" />}
        title="category.title"
        showSearchInput={false}>
        <button type="button" className="primary" onClick={onClickSave}>
          <i className="fas fa-save mr-2" /> {__('buttons.save')}
        </button>
      </BarControl>
    </>
  );
}
