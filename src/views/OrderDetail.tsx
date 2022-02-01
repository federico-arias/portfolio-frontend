import { useParams } from "react-router-dom"
import { Alert, BackButton, Title, Text } from "../components"
import { ArticleList } from "./ArticleList"
import { useDataApi } from '../hooks/useDataApi'

// get order (tracking + last checkpoint) by number
export const OrderDetail = () => {
  let { id } = useParams()
  const [state, setUrl] = useDataApi(`/orders/${id}`, [])

  if (state.isLoading) {
    return <div>Loading...</div>
  }

  if (state.error) {
    return <Alert message={state?.error?.message} />
  }

  if (!state.data[0]) {
    return null
  }

  const { status_text, status_details, orderNo, tracking_number, street, zip_code, city, email } = state.data[0]

  return <>
    <BackButton to={`/orders?email=${email}`} />
    <h1>Order {orderNo}</h1>

    <Title>Delivery Address</Title>
    <Text>{street} {zip_code} {city}</Text>

    <Title>Tracking Number</Title>
    <Text>{tracking_number}</Text>

    <Title>Delivery Status</Title>
    <Text>{status_text}: {status_details}</Text>

    <h2>Articles</h2>
    <ArticleList orderNo={orderNo}/>
  </>
}

