import React from 'react'

export default function AboutMe(props) {
    let skills = props.skills.map((s)=>
    {
        return <li>{s}</li>
    })
  return (
    <div className='w-2/7 bg-amber-100 flex flex-col gap-4 justify-center 
    px-4'>
        <h1 className='text-3xl font-semibold'>{props.username} Portfolio</h1>
        <img src={props.userimg} className="w-2/3 aspect-square rounded-full"/>
        <div className='text-2xl'>{props.username}</div>
        <div>{props.summary}</div>
        <div>
            <span className='text-2xl font-bold text-blue-900'>Skills</span>
            {skills}
        </div>       
    </div>
  )
}
