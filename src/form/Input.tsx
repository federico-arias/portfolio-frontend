import { ChangeEvent } from "react"
import { Errors } from './Error'
import { Field } from 'formik'
import styled from "styled-components"
import { Label } from './Label'
import { Container } from './Container'

type InputProps = {
  label: string
  name: string
  value: string
  required: boolean
  onChange: (e: ChangeEvent<any>) => void
  errors: any
  validate?: (arg0: string) => string | void
  type?: "number" | "text" 
}

export const Input = ({ validate, name, label, value, required, onChange, errors, type = "text" }: InputProps) => {
  return (
    <Container>
      <Label>{label} { required && <sup>*</sup> }
        <InputField
          id={name}
          type={type}
          name={name} 
          placeholder={label} 
          validate={validate}
          onChange={onChange} 
          value={value}
        />
      </Label>
      <Errors name={label} message={errors} />
    </Container>
  )
}

const InputField = styled(Field)`
  color: #4b4b4d;
  font-weight: 400;
  min-width: 21rem;
  font-size: 1.1rem;
  display: block;
  border: 2px solid #9b9fa3;
  font-family: sans-serif;
  background-color: transparent;
  margin-bottom: 0.4rem;
  padding: 1rem;
  color: #9fa3ac;
  cursor: text;
  
  &:placeholder {
    color: #9fa3ac;
  }

  &:-webkit-autofill,
  &:-internal-autofill-selected {
    -webkit-text-fill-color: inherit;
    background-color: transparent;
    -webkit-box-shadow: 0 0 0px 1000px #f7f1e9 inset
    background-image: none !important;
  }

`
