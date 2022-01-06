import 'react-dates/initialize';
import React from 'react'
import './App.css'
import './BookingForm'
import { Formik, FormikHelpers } from 'formik'
import { BookReservation } from './BookingForm'
import moment, { Moment } from 'moment'
import axios from 'axios'

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
  const isSubmitting = false
  const addReservation = async (values: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) => {
    try {
      await axios.post('/reservation', values)
      console.log(values)
      setSubmitting(false)
      resetForm()
      window.alert("Form sent successfuly")
    } catch (err) {
      //setError(err)
      window.alert("Error sending form")
    }
  }
  return (
    <div className="app">
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
