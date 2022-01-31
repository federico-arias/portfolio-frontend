import { TwoColLayout, LeftCol, RightCol } from './layout/TwoColumn'
import { DatePicker } from './form'
import { Input, Button, Dropdown } from './form'
import { FormikHandlers, FormikState, Form } from 'formik'
import { isOfLength } from './validation'
import countries from './countries.json'
const options = countries.map( c => ({ value: c.code, label: c.name }))

type Props = FormikState<any> & FormikHandlers
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
              required={true}
            />
            <Input
              name="firstName"
              label="First Name"
              validate={isOfLength(3)}
              errors={touched.firstName && errors.firstName}
              required={true}
              onChange={handleChange}
              value={values.firstName}
            />
            <Input
              name="billingAddress"
              label="Billing Address"
              validate={isOfLength(3)}
              errors={touched.billingAddress && errors.billingAddress}
              required={true}
              onChange={handleChange}
              value={values.billingAddress}
            />
            <Input
              name="postalCode"
              label="Postal Code"
              errors={touched.postalCode && errors.postalCode}
              required={true}
              onChange={handleChange}
              value={values.postalCode}
              type="number"
            />
            <Input
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
              name="billingCountry"
              label="Country"
              onChange={handleChange}
              error={errors.billingCountry as any}
              required={true}
              options={options}
              value={values.billingCountry}
            />
            <Input
              name="lastName"
              label="Last Name"
              validate={isOfLength(3)}
              errors={touched.lastName && errors.lastName}
              required={true}
              onChange={handleChange}
              value={values.lastName}
            />
            <Input
              name="city"
              label="City"
              validate={isOfLength(3)}
              errors={touched.city && errors.city}
              required={true}
              onChange={handleChange}
              value={values.city}
            />
            <Input
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
          isLoading={isSubmitting}
          disabled={isSubmitting} 
        >
          Book now
        </Button> 
      </Form>
  )
}
