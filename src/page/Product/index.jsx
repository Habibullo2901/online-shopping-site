import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Product.css'

const ProductView = () => {
    const [ product, setProduct ] = useState(null)
    const {id} = useParams();

    useEffect(() => {
        axios(`https://dummyjson.com/products/${id}`)
        .then(res => setProduct(res.data))
    }, [])

    console.log(product)
    console.log({id})

  return (
    <>
            {product &&
                <div className='prod'>
                    <img src={product.images[0]} alt="" />
                    <div className='prod__info'>
                        <p>Description : {product.description}</p>
                        <p>Brand : {product.brand}</p>
                        <p>Title : {product.title}</p>
                        <p>Price : {product.price} USD</p>
                        <p>Rate : {product.rating}</p>
                        <p>Stock : -{product.stock}%</p>
                    </div>
                </div>
            }
    </>
  )
}

export default ProductView