import React, { useState } from 'react'

export default function Valueswithstate() {
    // a,b,msg  set a on a textbox
    // set b on a textbox 
    // set msg on button click and show sum of a and b in msg
    const [n,setn] =useState(0)
    const [name,setname]=useState("")
    const [cname,setcname]=useState("yellow")
  return (
    <div style={{backgroundColor:cname,height:"100dvh"}}>
        <div><input type="color" onChange={(e)=>setcname(e.target.value)}/> </div>
        <div>Enter naem : <input type="text" onBlur={(e)=>setname(e.target.value)} /></div>
        <div>WElcome {name}</div>
    <div>Enter any no : 
        <input type="text" onChange={(e)=>setn(parseInt(e.target.value))}/>
    </div>
    <div className='text-2xl'>square of {n } is {n*n}</div>
    </div>
  )
}
