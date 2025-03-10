import React,{useState} from 'react'

export default function Stateeg1() {
    const [color,setcolor]=useState("purple")
    return (
      <div style={{backgroundColor:color,height:'100dvh'}}>
        stateeg1
        <div className='flex '>
        <div className='h-6 w-6 bg-[red]  border-2 border-white' onClick={()=>setcolor('red')}></div>
        <div className='h-6 w-6 bg-[blue]  border-2 border-white' onClick={()=>setcolor('blue')}></div>
        <div className='h-6 w-6 bg-[green]  border-2 border-white' onClick={()=>setcolor('green')}></div>
        <div className='h-6 w-6 bg-[orange]  border-2 border-white' onClick={()=>setcolor('orange')}></div>
        <div className='h-6 w-6 bg-[purple] border-2 border-white' onClick={()=>setcolor('purple')}></div>
        </div>
        </div>
    )
}
