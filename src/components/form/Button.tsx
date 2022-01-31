import styled from "styled-components"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
    isLoading: boolean 
};


export const Button = ({isLoading = false, children, ...props}: ButtonProps) => {
  const Content = isLoading ? <Spinner /> : children

  return (
    <StyledButton type="submit" {...props} >
      {Content}
    </StyledButton>
  )
}

const Spinner = () => <LoadingIndicator><div /> <div /> <div /></LoadingIndicator>

const LoadingIndicator = styled.div`
& {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 40px;
}
& div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fff;
  animation:lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
& div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
& div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
& div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 32px;
  }
  50%, 100% {
    top: 24px;
    height: 16px;
  }
}`

export const StyledButton = styled.button`
  background-color: #a2ab98;
  font-family: 'Josefin Sans', sans-serif;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 3.1rem;
  min-width: 13rem;
  font-weight:400;
  height: 3.1rem;
  border: none;
  letter-spacing: 2px;

  &:hover {
    cursor: pointer;
  }
`
