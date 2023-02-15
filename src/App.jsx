import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Cart, Contact, Shop } from './pages'
import { ShopContextProvider } from "./context/ShopContext"
import { Navbar } from './components/Navbar'

export default function App() {
  return (
    <ShopContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </ShopContextProvider>
  )
}
