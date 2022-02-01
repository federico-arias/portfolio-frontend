import styled from "styled-components"
import { Link } from "react-router-dom"

type Props = {
  to: string
  className?: string
}

const Button = ({to, className}: Props) => (
    <h2 className={className}><Link to={to}>« Go back</Link></h2>
)

export const BackButton = styled(Button)`
    margin-top: 10rem;

    & a:visited,
    & a {
      color: inherit;
    }

    & a:hover {
      text-decoration: underline;
    }
`
