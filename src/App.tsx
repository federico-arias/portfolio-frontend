import React from 'react'
import { Routes, Route } from "react-router-dom"
import { NotFound, EmailSearch, OrderList } from './views'

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound/>} />
      <Route path="/" element={<EmailSearch />} />
      <Route path="/orders" element={<OrderList/>} />
      <Route path="/checkpoints" element={<NotFound />} />
    </Routes>
  );
}

export default App;
