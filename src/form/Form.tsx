import { FormEventHandler, createContext, useState, Dispatch, SetStateAction, FunctionComponent } from 'react'

type FormStateType = {
  status: boolean // is submitted or not?
  setFormStatus?: Dispatch<SetStateAction<boolean>>
}

export const FormState = createContext<FormStateType>({status: false});

type FormProps = {
  onSubmit: () => void
}

export const Form: FunctionComponent<FormProps> = ({ onSubmit, children }) => {
  const [status, setFormStatus] = useState(false);
  /*
  const value = useMemo(
    () => ({ status, setFormStatus}), 
    [status]
  )
  useEffect(() => () => setFormStatus(false))
   */

  const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    console.log("triggered")
    ev.preventDefault()
    setFormStatus(true)
    if (false) {
      onSubmit()
    }
  }

  return (
    <FormState.Provider value={{status, setFormStatus}}>
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    </FormState.Provider>
  );
}
