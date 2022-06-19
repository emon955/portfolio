import React from 'react'
import './Homescreen.css'
import products from '../Data'
import ProductCard from '../Component/ProductCard'
const Homescreen = () => {
  return (
    <div className='product__wrapper'>
        {products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default Homescreen