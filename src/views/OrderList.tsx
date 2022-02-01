import { useSearchParams } from "react-router-dom"
import { useDataApi } from '../hooks/useDataApi'
import { Alert, BackButton } from "../components"
import styled from "styled-components"
import { Link } from "react-router-dom"

export const OrderList = () => {
  const [searchParams] = useSearchParams()
  const [state, setUrl] = useDataApi(`/trackings?email=${searchParams.get("email")}`, [])

  if (state.error) {
    return <Alert message={state?.error?.message} />
  }

  if (state.isLoading) {
    return <h1>Loading...</h1>
  }

  return <>
    <BackButton to="/" />
    <h1>Your Orders</h1>
    {state.data.filter((_: any) => true).map(OrderListItem)}
  </>
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
          {orderNo}
          <Title>Delivery Address</Title>
          {street}
          {zip_code} {city}
        </LeftCol>
        <RightCol>
          <Title>Current Status</Title>
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
`

export const Title = styled.h3`
    font-weight: 800;
`

export const LeftCol = styled.div`
    margin-right: 5px;
`
export const RightCol = styled.div`
    margin-left: 5px;
`
