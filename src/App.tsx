import React from 'react'
import {
    BrowserRouter,
      Routes,
        Route
} from "react-router-dom"
import { NotFound } from './views/NotFound'
import { EmailSearch } from './views/EmailSearch'

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound/>} />
      <Route path="/" element={<EmailSearch />} />
      <Route path="expenses" element={<App />} />
      <Route path="invoices" element={<App />} />
    </Routes>
  );
}

export default App;
