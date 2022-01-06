import styled from "styled-components"

type ErrorProps = {
 message: string | string[]
 name: string 
}

export const Errors = ({ name, message}: ErrorProps) => {
  if (!message) return null
  return (
    <ErrorMessage> {`${name} ${message}`} </ErrorMessage>
  )
}

const ErrorMessage = styled.div`
    color: #ea414d;
    font-size: 0.8rem;
`
