import React from 'react'
import { Navbar } from './components/Navbar/Navbar'

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import { Route, Routes } from 'react-router-dom'
import { Placeorder } from './pages/PlaceOrder/Placeorder'
import Footer from './components/Footer/Footer';



const App = () => {
  return (
    <>
    <div className='app' >
      <Navbar />

      <Routes>
        < Route path='/' element={<Home />} />
        < Route path='/cart' element={<Cart />} />
        < Route path='/placeorder' element={<Placeorder />} />
      </Routes>
  

    </div>
    <Footer/>
    </>
  )
}

export default App