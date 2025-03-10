import React from 'react'

export default function Projects() {
  
  let projectsData = [ ,
  {projectname:"Time series Forecasting",technology:".net",duration:"3mongth ",img:"", liveurl:"",github:""},
  
  {projectname:"cool chemistry",technology:"MERN stack",duration:"6 mongth",img:"", liveurl:"",github:""},

{projectname:" Delhi car rental",technology:"Mean stack",duration:"5 months",img:"", liveurl:"",github:""}]

 let projectsUI = projectsData.map((p)=><div>{p.projectname}<br></br>{p.technology}<br></br>{p.duration}</div>)
 

  return (
    <>
    <div className='flex justify-center align-middle items-center gap-6'>
      {projectsUI}
      </div>
    </>
  )
}
