import React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import Select, { Props } from './Select';

export default function SelectForm({
  name,
  items,
  placeholder,
  children,
}: Props) {
  const { control } = useFormContext();
  const { field: { onChange, value } } = useController({ name, control });

  return (
    <Select
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      items={items}>
      {children}
    </Select>
  );
}
