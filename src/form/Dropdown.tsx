import React, { Component } from 'react'
import Select from 'react-select'
import styled from "styled-components"

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    padding: 19,
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "transparent",
    height: "55px",
    border: "1px solid red",
    borderRadius: "0",
    fontFamily: "sans-serif",
    fontSize: "1rem",
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

type Option = {
  value: string
  label: string
}

type Props = {
  name: string
  label: string
  onChange: (arg0: any) => void
  error: string
  options: Option[]
  value: any
}

/*
 * Formik expects a regular onChange handler.
 */
const handleChangeAdapter = (hc: any, value: string, name: string) => (value: any) => {
  hc({ target: { value: value.value, name } })
}

export const Dropdown = ({ name, label, onChange, error, options, value }: Props) => {
  return (
    <>
  <Label>{label}</Label>
  <Select 
    options={options} 
    styles={customStyles} 
    onChange={handleChangeAdapter(onChange, value, name)} 
  />
    </>
)}

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
