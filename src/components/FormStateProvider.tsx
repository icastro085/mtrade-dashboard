import React, { useContext, useState } from 'react';

const FormState = React.createContext({});

export const useFormState = (): any => useContext(FormState);

export default function FormStateProvider({ state, children, ...props }: any) {
  const [formState, setFormState] = useState({});

  return (
    <FormState.Provider value={[{ ...state, ...formState }, setFormState]}>
      <form {...props}>{children}</form>
    </FormState.Provider>
  );
}
