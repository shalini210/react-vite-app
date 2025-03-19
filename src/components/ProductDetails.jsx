import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import prdts from './productsdata';

export default function ProductDetails() {
    let params = useParams()
    let pid = params.pid;
    const [product,setproduct] = useState({})
    useEffect(()=>
    {
    var    p = prdts.find((p)=>p.id==pid);
        setproduct(p)
    },[])
  return (
    
    <div className="max-w-6xl mx-auto mt-16 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
    <img
      src={product.img}
      alt="Product"
      className="w-full md:w-1/3 h-64"
    />
    <div className="p-6 flex flex-col justify-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-1">{product.company}</p>
      <p className="text-xl font-semibold text-green-600 mb-3">{product.price}</p>
      <p className="text-gray-700">
      {product.des}
      </p>
    </div>
  </div>
  )
}
