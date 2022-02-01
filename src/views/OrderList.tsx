import { useSearchParams } from "react-router-dom"
import { useDataApi } from '../hooks/useDataApi'
import { Alert, BackButton, Title, Text } from "../components"
import styled from "styled-components"
import { Link } from "react-router-dom"

export const OrderList = () => {
  const [searchParams] = useSearchParams()
  const [state, setUrl] = useDataApi(`/orders?email=${searchParams.get("email")}`, [])

  if (state.error) {
    return <Alert message={state?.error?.message} />
  }

  if (state.isLoading) {
    return <h1>Loading...</h1>
  }

  return ( <>
    <BackButton to="/" />
    <h1>Your Orders</h1>
    {state.data.map(OrderListItem)}
  </>)
}

type Props = {
  orderNo: string
  status: string
  address: string
  tracking_number: string
  street: string
  zip_code: string
  city: string
}

const OrderListItem = ({ orderNo, status, street, zip_code, city, tracking_number }: Props) => {
  return (
    <Container>
      <TwoColLayout>
        <LeftCol>
          <Title>Order Number</Title>
          <Text>{orderNo}</Text>
          <Title>Delivery Address</Title>
          <Text>{street} {zip_code} {city}</Text>
        </LeftCol>
        <RightCol>
          <Title align="right">Current Status</Title>
          <Text>{status}</Text>
        </RightCol>
      </TwoColLayout>
      <Footer>
        <Link to={`${orderNo}/detail`}>See Detail</Link>
      </Footer>
    </Container>
  )
}
export const Container= styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid grey;
`

export const Footer = styled.div`
  text-align: right;
  padding-top: 2rem;
  width: 100%;

  & a,
  & a:visited {
    color: inherit;
  }
`

export const TwoColLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LeftCol = styled.div`
    margin-right: 5px;
`
export const RightCol = styled.div`
    margin-left: 5px;
`
