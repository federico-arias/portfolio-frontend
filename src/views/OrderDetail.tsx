import { useParams } from "react-router-dom"
import { Alert, BackButton } from "../components"
import styled from "styled-components"

export const OrderDetail = () => {
  let { id } = useParams();
  return <>
    <BackButton to="/" />
    <h2>Articles</h2>
    <OrderArticle /> 
  </>
}

type Props = {
  articleImageUrl: string
  articleNo: string
  quantity: string
  product_name: string
}

//const OrderArticle = ({articleImageUrl, articleNo, quantity, product_name }: Props) => {
const OrderArticle = ({}) => {
  return (
    <Row>
      <div>
        x1
      </div>
      <div>
        <img src="http://cdn.parcellab.com/img/sales-cannon/parcellab-cap.jpg" />
      </div>
      <div>
          parcelLab Tote Bag
      </div>
    </Row>
  )
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
    justify-content: center;
  border-bottom: 1px solid grey;
  align-items: center;

  & div {
    padding: 2rem;
  }
`

