import React from 'react'
import './App.css'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Products from './page/Products'
import ProductView from './page/Product'

function App() {
  const location = useLocation().pathname;

  return (
    <>
    {location === '/' ? <Link className='greet' to={'/products'}>Welcome dear customers!!!</Link> : ""}
      <Routes>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductView/>} />
      </Routes>
    </>
  )
}

export default App
