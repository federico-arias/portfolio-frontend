import {FocusedInputShape, DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment, {Moment}from 'moment'
import { useState } from 'react'
import styled from "styled-components"

type handleDataChangeProps = {
  startDate: Moment | null
  endDate: Moment | null
}
export const DatePicker = ({ label, onChange, value0, value1 }: any) => {

  const handleDateChange = ({ startDate, endDate }: handleDataChangeProps) => {
    const start = { target: { name: 'startDate', value: startDate}}
    const end = { target: { name: 'endDate', value: endDate}}
    onChange(start)
    onChange(end)
  }

  const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>("endDate")

  return (
    <>
    <Label>
      {label}
    </Label>
    <DateRangePicker
      minDate={moment().add(1, 'day')}
      startDate={value0} 
      startDateId="s" 
      endDate={value1} 
      endDateId="e" 
      onDatesChange={handleDateChange} 
      focusedInput={focusedInput} 
      onFocusChange={setFocusedInput} 
    />
    </>
  )
}

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

