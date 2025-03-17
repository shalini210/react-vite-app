import React, { useRef, useState } from 'react'

export default function Login(props) {
    let usernameRef = useRef()
    let pwdref = useRef()
    const [msg,setmsg] = useState()
    let chkLogin=()=>
    {
        if(usernameRef.current.value=="admin" && pwdref.current.value=="123")
        {
            props.setuserlogin(true)
        }
        else
        {
            setmsg("invalid credentials");
        }
    }
    let clearfields=()=>
    {
        usernameRef.current.value=""
        pwdref.current.value=""
        setmsg("")
    }
  return (
    <div className='flex flex-col justify-center align-middle
     items-center gap-2 w-1/2 mx-auto bg-blue-900 text-white p-8'>
        <div>
        <label>Username</label> 
        <input type="text" className='border-2'  ref={usernameRef}/>
        </div>
        <div>
        <label>PAssword</label>
         <input type="password" ref={pwdref}  className="border-2"/>
        </div>
        <div className='text-white flex gap-8' >
            <input type="button" value="Login" 
             className='bg-green-500 p-2 w-32 border-2 border-sky-300 '
              onClick={()=>chkLogin()}/>
            <input type="button" value="Cancel"
             className='bg-red-600  p-2 w-32 border-2 border-sky-300'  
             onClick={()=>clearfields()}/>
        </div>
        <p className='text-red-500'>
{msg}
        </p>
    </div>
  )
}
