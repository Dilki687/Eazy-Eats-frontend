// import { Home } from '@mui/icons-material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RestaurantDetails from '../component/Restaurant/RestaurantDetails'
import Cart from '../component/Cart/Cart'
import Profile from '../component/Profile/Profile'
import { Navbar } from '../component/Navbar/Navbar'
import { Auth } from '../component/Auth/Auth'
import Home from "../component/Home/Home";
import { PaymentSuccess } from '../component/PaymentSuccess/PaymentSuccess'

export const CustomerRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home/>}/>
            <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
            <Route path='/payment/success/:id' element={<PaymentSuccess/>}/>
        </Routes>
        <Auth/>
    </div>
  )
}
