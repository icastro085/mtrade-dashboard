import React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import InputText, { Props } from './InputText';

export default function InputTextForm({ name, ...props }: Props) {
  const { control, formState: { errors } } = useFormContext();
  const { field: { onChange, value } } = useController({ name, control });

  return (
    <InputText
      name={name}
      value={value}
      error={errors[name]?.message}
      onChange={onChange}
      {...props} />
  );
}
