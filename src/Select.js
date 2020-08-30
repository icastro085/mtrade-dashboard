import React, { useState, useEffect } from 'react';

export default function Select({
  value: valueDefault = '',
  items = [],
  placeholder = '',
  onChange = () => {},
  children,
}) {
  const getValue = (selectedId) => {
    const { value = '' } = items
      .find(({ id }) => id === selectedId) || {};

    return value;
  };

  const [valueSelected, setValueSelected] = useState({});

  const onChangeSelect = (id, value) => {
    setValueSelected(getValue(id));
    onChange(id, value);
  };

  useEffect(() => {
    setValueSelected(getValue(valueDefault));
  }, [valueDefault]);

  return (
    <>
      <label>{children}</label>
      <div className="select-container">
        <input
          onChange={() => {}}
          type="text"
          value={valueSelected}
          className="select"
          placeholder={placeholder} />
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
