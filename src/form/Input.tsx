import { useState, useContext, ChangeEvent } from "react"
import { FormState } from './Form'
import { Errors } from './Error'
import { Field } from 'formik'
import styled from "styled-components"

type TextInputProps = {
  label: string
  name: string
  value: string
  required: boolean
  onChange: (e: ChangeEvent<any>) => void;
  errors: any
  validate: any
}

export const TextInput = ({ validate, name, label, value, required, onChange, errors }: TextInputProps) => {
  return (
    <Container>
      <Label>{label} { required && <sup>*</sup> }
        <Input 
          id={name}
          type="text" 
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

export const NumberInput = TextInput

const Container = styled.div`
  margin-bottom: 1.6rem;
`

const Label = styled.label`
  line-height: 2;
  font-weight: 400;
  font-size: 1.2rem;
  display: block;
  color: #4b4b4d;
  & sup {
    color: #ea414d;
    font-weight: 900;
  }
`

const Input = styled(Field)`
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
