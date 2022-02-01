import { Button, Input } from '../components'
import { Formik } from 'formik'
import { FormikHandlers, FormikState, Form } from 'formik'
import { useNavigate } from "react-router-dom";

const initialValues = { email: "" }

export const EmailSearch= () => {
  const navigate = useNavigate();

  const handleSubmit = (values: typeof initialValues) => {
    navigate(`orders?email=${values.email}`, { replace: false });
  }

  return (
  <Formik onSubmit={handleSubmit} initialValues={initialValues}>
    {EmailSearchForm}
  </Formik>
  )
}

type Props = FormikState<typeof initialValues> & FormikHandlers

export const EmailSearchForm = ({
  isSubmitting, 
  handleSubmit, 
  handleChange, 
  touched,
  errors, 
  values
}: Props) => (
  <Form>
    <h1>Please enter your email address to see your recent orders</h1>
    <Input 
      label="Email" 
      name="email" 
      required={true} 
      value={values.email} 
      onChange={handleChange} 
      errors={errors.email} 
    />
    <Button 
      isLoading={isSubmitting}>SEND</Button>
  </Form>
)



