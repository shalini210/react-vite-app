import React, { useState } from 'react'

export default function Valueswithstate() {
  // let count =0;
const [table,settable] =useState(0)

  const [count,setcount] = useState(0)
  let increment = ()=>
  {
    let i = count;
    i++;
    setcount(i)
    console.log(count)
  }
  let decrement = ()=>
  {
    let i = count;
    i--;
    setcount(i)
    console.log(count)
  }
  return (
    <div className='flex'>
      <p>Enter any no :  <input type="text" /></p>
      <input type="button" value="show table" />
      <div>
        {table}
      </div>
      {/* <input type="button" value="-" onClick={()=>decrement()} />
    {count}
    <input type="button" value="+" onClick={()=>increment()}/> */}
    </div>
  )
}
