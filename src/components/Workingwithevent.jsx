import React, { useState } from 'react'
export default function Workingwithevent() {
    const [i,seti] = useState(0)
    let increment=()=>
    {
        let x = i;
        x++
        seti(x)        
    }
    let decrement=()=>
    {
        let x = i;
        x--;
        seti(x)        
    }
  return (
    <>
    <h1>Workingwithevent</h1>
    <div className='flex'>
    <input type="button" value="+" onClick={()=>increment()}/>
    {i}
    <input type="button" value="-" onClick={()=>decrement()}/>
    </div>
    </>
  )
}
