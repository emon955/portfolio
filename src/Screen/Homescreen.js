import React from 'react'
import products from '../Data'
import ProductCard from '../Component/ProductCard'
const Homescreen = () => {
  return (
    <div>
        {products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default Homescreen