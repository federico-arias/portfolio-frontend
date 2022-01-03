import { createContext, useState, useContext, useMemo, Dispatch, SetStateAction } from 'react';

type FormStateType = {
  status: string // 'ok' | 'submitted' | 'errored'
  setFormStatus: Dispatch<SetStateAction<string>> | (() => void)
}

const FormState = createContext<FormStateType>({
  status: 'ok',
  setFormStatus: () => {},
});

export const Form = (props: any) => {
  const [status, setFormStatus] = useState('ok');
  const value = useMemo(
    () => ({ status, setFormStatus}), 
    [status]
  );

  return (
    <FormState.Provider value={value}>
      <form onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </FormState.Provider>
  );
}
