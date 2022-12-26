import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
// import BillingAddress from './pages/BillingAddress'
import Payment from './pages/Payment'
import PaymentSecure from './pages/PaymentSecure'

const routes = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/payment-secure' element={<PaymentSecure />} />
          {/* <Route path='/billing-address' element={<BillingAddress />} /> */}
        </Routes>
      </Router>
      
    </div>
  )
}

export default routes
