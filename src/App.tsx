import React from 'react';
import './App.css';
//import { Input } from './form'
/*

https://gitlab.com/limehome/interviews/fullstack-challenge/-/raw/master/design/booking-form.png

primary button: a2ab98
primary text: 4b4b4d
Form border: 9b9fa3
attention: ea414d
background: f7f1e9


separation: 14px
form-height: 100px
form-width: 700px

Book your suite at limehome


Check-in/out dates*
First Name
Billing Address
Postal Code
Email

Number of guests
Last Name
Billing Country
City
Phone number

Book Now

<Form onSubmit={handle}>
  <TwoColLayout>
    <LeftColumn>
      <DatePicker 
        label="Check-in/out dates" 
        errors={errors.checkin} 
        validate={isRequired}
      />
      <TextInput label="First Name" name="first-name" errors={errors.checkin} />
      <TextInput label="Billing Address" name="first-name" errors={errors.checkin} />
      <NumberInput label="PostalCode" name="first-name" errors={errors.checkin} />
      <TextInput label="Email" />
    </LeftColumn>
    <RightColumn>
      <NumberInput label="Number of guests" name="first-name" errors={errors.checkin} />
      <TextInput label="Last Name" name="first-name" errors={errors.checkin} />
      <Select options={}>
    </RightColumn>
  </TwoColLayout>
</Form>

 */
function App() {
  //const {} = useFetch("/api/v1/reservation")
  return (
    <div className="App">
      <form>
        <h1>Book your suite at limehome</h1>
        <div>
          <div>
            <label>First Name
              <input name="foo" placeholder="First Name" />
            </label>
          </div>
          <div>
            <label>Last Name
              <input type="number" name="foo" placeholder="First Name" />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
