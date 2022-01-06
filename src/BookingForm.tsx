import { TwoColLayout, LeftCol, RightCol } from './layout/TwoColumn'
import { DatePicker } from './form'
import { TextInput, Button, Dropdown } from './form'
import { FormikHandlers, FormikState, Form } from 'formik'
import { isOfLength } from './validation'
import countries from './countries.json'

type Props = FormikState<any> & FormikHandlers

const options = countries.map( c => ({ value: c.code, label: c.name }))

//[["city", "City", true, "lastName"]]
export const BookReservation = ({
  isSubmitting, 
  handleSubmit, 
  handleChange, 
  touched,
  errors, 
  values
}: Props) => {
  return (
      <Form onSubmit={handleSubmit}>
        <h1>Book your suite at limehome</h1>
        <TwoColLayout>
          <LeftCol>
            <DatePicker 
              label="Check-In/Check-Out"
              name0="checkIn"
              name1="checkOut"
              value0={values.startDate}
              value1={values.endDate}
              onChange={handleChange}
            />
            <TextInput
              name="firstName"
              label="First Name"
              validate={isOfLength(3)}
              errors={touched.firstName && errors.firstName}
              required={true}
              onChange={handleChange}
              value={values.firstName}
            />
            <TextInput
              name="billingAddress"
              label="Billing Address"
              validate={isOfLength(3)}
              errors={touched.billingAddress && errors.billingAddress}
              required={true}
              onChange={handleChange}
              value={values.billingAddress}
            />
            <TextInput
              name="postalCode"
              label="Postal Code"
              validate={isOfLength(3)}
              errors={touched.postalCode && errors.postalCode}
              required={true}
              onChange={handleChange}
              value={values.postalCode}
            />
            <TextInput
              name="email"
              label="Email"
              validate={isOfLength(3)}
              errors={touched.email && errors.email}
              required={true}
              onChange={handleChange}
              value={values.email}
            />
          </LeftCol>
          <RightCol>
            <Dropdown 
              name="country"
              label="Country"
              onChange={handleChange}
              error={errors.country as any}
              options={options}
              value={values.country}
            />
            <TextInput
              name="lastName"
              label="Last Name"
              validate={isOfLength(3)}
              errors={touched.lastName && errors.lastName}
              required={true}
              onChange={handleChange}
              value={values.lastName}
            />
            <TextInput
              name="city"
              label="City"
              validate={isOfLength(3)}
              errors={touched.city && errors.city}
              required={true}
              onChange={handleChange}
              value={values.city}
            />
            <TextInput
              name="phone"
              label="Phone Number"
              validate={isOfLength(5)}
              errors={touched.phone && errors.phone}
              required={true}
              onChange={handleChange}
              value={values.phone}
            />
          </RightCol>
        </TwoColLayout>
        <Button 
          disabled={isSubmitting} 
          type="submit"
        >
          Book now
        </Button> 
      </Form>
  )
}
