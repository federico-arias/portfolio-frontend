import 'react-dates/initialize';
import React, {useState} from 'react'
import './App.css'
import './BookingForm'
import { Formik, FormikHelpers } from 'formik'
import { BookReservation } from './BookingForm'
import moment, { Moment } from 'moment'
import axios from 'axios'
import { AlertMessage } from './components/Alert'
import Alert from '@mui/material/Alert';

type Values = {
  firstName: string,
  lastName: string,
  numberOfGuests: number,
  startDate: Moment,
  endDate: Moment,
  billingAddress: string,
  billingCountry: string, 
  postalCode: string,
  city: string, 
  email: string,  
  phone: string,
}

const initialValues = {
  firstName: "",
  lastName:"",
  numberOfGuests: 2,
  startDate: moment(),
  endDate: moment().add(4, 'days'),
  billingAddress: "",
  billingCountry: "",
  postalCode: "",
  city: "",
  email: "",
  phone: "",
}

function App() {
  const [apiError, setApiError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)
  const addReservation = async (values: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) => {
    setApiError(null)
    setSuccess(false)
    try {
      await axios.post('/api/v1/reservation', values)
      setSuccess(true)
    } catch (err) {
      setApiError(`An error ocurred submiting your form: ${err}`)
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <div className="app">
      <AlertMessage message={apiError} />
      {success && <Alert>Form submited!</Alert> }
      <Formik
        onSubmit={addReservation}
        initialValues={initialValues}
      >
        {BookReservation}
      </Formik>
    </div>
  );
}

export default App;
