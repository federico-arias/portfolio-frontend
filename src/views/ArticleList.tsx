import styled from "styled-components"
import { useDataApi } from '../hooks/useDataApi'
import { Alert, Title, Text } from "../components"

type ArticleListProps = {
  orderNo: string
}

// get from trackings.csv (articles) by orderNo
export const ArticleList = ({orderNo}: ArticleListProps) => {
  const [state, setUrl] = useDataApi(`/orders/${orderNo}/articles`, [])

  if (state.isLoading) {
    return <div>Loading...</div>
  }

  if (state.error) {
    return <Alert message={state?.error?.message} />
  }

  return (
    <div>
      {state.data.map(ArticleListItem)}
    </div>
  )
}

type Props = {
  articleImageUrl: string
  articleNo: string
  quantity: string
  product_name: string
}

const ArticleListItem = ({articleImageUrl, articleNo, quantity, product_name }: Props) => {
  return (
    <Row>
      <div>
        {quantity}
      </div>
      <div>
        <img src={articleImageUrl} />
      </div>
      <div>
        {product_name}
        <Text>{articleNo}</Text>
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

  &:first-child {
    border-top: 1px solid grey;
  }
`

