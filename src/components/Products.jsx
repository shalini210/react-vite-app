import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router'
import prdts from './productsdata'
import { Link } from 'react-router'
export default function Products(props) {
    const navigate = useNavigate()
    const location = useLocation()
      useEffect(()=>
    {
        if(location.state!=null)
        {                       
            console.log("contionye on this page")           
        }
        else
        {
            console.log("sent back to lgoin")
            navigate("/homewithlogin")
        }
    },[])
   
    var prdtsui = prdts.map((p)=>
    {
        return <div className='w-32 h-32 border-2 border-amber-300
         bg-yellow-100'>
            <img src={p.img} class="w-full aspect-square" alt="" />
             {p.name}<br></br> {p.company}<br></br>{p.price}
         <Link to={`/productdetails/${p.id}`}>View more </Link></div>
    })
  return (
    <div>Products:
        <div className='flex flex-wrap justify-between'>
            {prdtsui}
        </div>
    </div>
  )
}
