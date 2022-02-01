import React from 'react'
import { Routes, Route } from "react-router-dom"
import { NotFound, EmailSearch, OrderList, OrderDetail } from './views'

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound/>} />
      <Route path="/" element={<EmailSearch />} />
      <Route path="/orders" element={<OrderList/>} />
      <Route path="/orders/:id/detail" element={<OrderDetail/>} />
    </Routes>
  );
}

export default App;
