import React from 'react'
import { Routes, Route } from "react-router-dom"
import { NotFound, EmailSearch, OrderList, OrderDetail } from './views'
import styled from "styled-components"

function App() {
  return (
    <Container>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<EmailSearch />} />
        <Route path="/orders" element={<OrderList/>} />
        <Route path="/orders/:id/detail" element={<OrderDetail/>} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  padding: 3rem;
  max-width: 38rem;
`

export default App;
