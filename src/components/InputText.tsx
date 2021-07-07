import React from 'react';
import classNames from 'classnames';
import { t } from '../locale';

export interface Props {
  label?: string;
  value?: string;
  name: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
}

export default function InputText({
  label = '',
  value = '',
  name,
  onChange = () => null,
  placeholder,
  error,
}: Props) {
  return (
    <>
      <label>{t(label)}</label>
      <input
        className={classNames({ 'is-invalid': !!error })}
        type="text"
        name={name}
        defaultValue={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t(placeholder)} />

      <span className="invalid-feedback ">{error}</span>
    </>
  );
}
