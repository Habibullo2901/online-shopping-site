import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

const Products = () => {
    const [ products, setProducts ] = useState([])
  
    useEffect(() => {
      axios("https://dummyjson.com/products")
      .then(response => setProducts(response.data.products))
    }, [])
  
    console.log(products)
  
  return (
    <div className="products">
        {
          products.map(product => (
            <div className='product__card' key={product.id}>
              <Link to={`/products/${product.id}`}><img width={200} src={product.images[0]} alt="" /></Link>
              <p>Brand : {product.brand}</p>
              <p>Price : {product.price} $</p>
              <p>Description : {product.description}</p>
              <p>Rating : {product.rating}⭐</p>
            </div>
          ))
        }
      </div>
  )
}

export default Products