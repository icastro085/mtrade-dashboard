import React from 'react';

export default function Select({
  value: valueDefault = '',
  items = [],
  placeholder = '',
  onChange = () => {},
  children,
}) {
  const { value: valueSelected = '' } = items
    .find(({ id }) => id === valueDefault) || {};

  const onChangeSelect = (id, value) => {
    onChange(id, value);
  };

  return (
    <>
      <label>{children}</label>
      <div className="select-container">
        <input
          onChange={() => {}}
          type="text"
          value={valueSelected}
          className="select"
          placeholder={placeholder}
        />
        <ul>
          {
            items.map(({ id, value }) => (
              <li key={`select-item-${id}`} onClick={() => onChangeSelect(id, value)}>
                {value}
              </li>
            ))
          }
        </ul>
        <i className="fas fa-chevron-down" />
      </div>
    </>
  );
}
