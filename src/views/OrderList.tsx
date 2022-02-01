import { useSearchParams } from "react-router-dom"
import { useDataApi } from '../hooks/useDataApi'
import { Link } from "react-router-dom"

export const OrderList = () => {
  const [searchParams] = useSearchParams()
  const [state, setUrl] = useDataApi(`/trackings?email=${searchParams.get("email")}`, [])


  return <>
    <h2><Link to="/">« Go back</Link></h2>
    <h1>Your Orders</h1>
    <p>{state.isLoading && "Loading"}</p> 
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
  return <div>
    <div>Order Number</div>
    {orderNo}
    <div> Current Status </div>
    <div> Delivery Address</div>
    {street}
    {zip_code} {city}
    </div>
}
