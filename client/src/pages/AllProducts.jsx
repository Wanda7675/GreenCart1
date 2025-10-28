import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'
import Footer from '../components/Footer'
const AllProducts = () => {
    const {product,searchQuery}=useAppContext()
 
    const [filteredProducts,setFilteredProducts]=useState([])
 useEffect(
    ()=>{
        if(searchQuery.length>0){
            setFilteredProducts(product.filter(
                products=>products.name.toLowerCase().includes(searchQuery.toLowerCase())
            ))
        }else{
            setFilteredProducts(product)
        }
    },[product,searchQuery]
 )
 
    return (
    <div className='mt-16 flex flex-col'>
      <div>
        <p className='text-2xl font-medium uppercase'>All Products</p>
        <div className='w-16 h-0.5 bg-primary rounded-full'></div>
      </div>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3
md:gap-6 lg:grid-cols-5 mt-6'>
    {filteredProducts.filter((products)=>products.inStock).map(
(product,index)=>(
    <ProductCard key={index} product={product}/>
)

    

    )}
    </div>

    </div>
  )
}

export default AllProducts
