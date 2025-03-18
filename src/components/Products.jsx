import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router'
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
    var prdts = [{id:1,name:"nikia 1600",company:"Nokia",price:"1250"},
    {id:1,name:"realme 9",company:"Redmi",price:"12500"},
    {id:1,name:"Galaxy 45",company:"Google",price:"5000"},
    {id:1,name:"iphone 50",company:"Apple",price:"200050"}]
    var prdtsui = prdts.map((p)=>
    {
        return <div className='w-32 h-32 border-2 border-amber-300 bg-yellow-100'> {p.name}<br></br> {p.company}<br></br>{p.price}</div>
    })
  return (
    <div>Products:
        <div className='flex flex-wrap justify-between'>
            {prdtsui}
        </div>
    </div>
  )
}
