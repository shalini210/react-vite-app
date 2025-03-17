import React, { useState } from 'react'
import { useEffect } from 'react';
export default function Exampleofuseeffect() {
    const [count,setcount]=useState(0)
    let increment = ()=>
    {
        let i = count ;
        i++;
        setcount(i)
    }
  useEffect(()=>{
    console.log("this is from use effect hook"+count)
  },[] );
  return (
    <div>Exampleofuseeffect:{count}
        <input type="button" value="click here " onClick={()=>increment()}></input>
    </div>
)
}
