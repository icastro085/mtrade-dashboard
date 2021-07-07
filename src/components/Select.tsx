import React, { useState, useEffect } from 'react';
import { t } from '../locale';

export interface IItems { id: string; value: string }

export interface Props {
  name?: string;
  value?: string;
  items: IItems[];
  placeholder?: string;
  onChange?: (id: string, value: string) => void;
  children: any;
}

export default function Select({
  name,
  value: valueDefault = '',
  items = [],
  placeholder = '',
  onChange = (id: string, value: string) => null,
  children,
}: Props) {
  const getValue = (selectedId: string): string => {
    const { value = '' } = items
      .find(({ id }) => id === selectedId) || {};

    return value;
  };

  const [valueSelected, setValueSelected] = useState('');

  const onChangeSelect = (id: any, value: string) => {
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
          autoComplete="off"
          name={name}
          onChange={() => {}}
          type="text"
          value={valueSelected}
          className="select"
          placeholder={t(placeholder)} />
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
