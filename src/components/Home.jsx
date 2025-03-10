import React from 'react'
import TypewriterComponent from 'typewriter-effect'
import StarField from "react-starfield"
import homemain from "../assets/images/home-main.svg"
export default function Home() {
  return (
    <div className='w-full  bg-center bg-cover
    bg-[url("./assets/images/home-bg.jpg")]'>

    <div className='flex w-4/5 mx-auto h-[100dvh]  justify-center 
    items-center '>
      
      <div className='w-full'>
      <StarField
        starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <h1 className=" font-light text-white text-5xl leading-16">
        Hello There, <br></br><span className='text-fuchsia-400'> I am John Capner</span></h1>
      <br></br>
      <h1 className=" text-5xl font-semibold text-fuchsia-400" >
         <TypewriterComponent 
         options=
         {
          {strings:["Software Developer","Mern Stack ","Web Designer "]
         ,autoStart: true,
        loop: true,
        deleteSpeed: 50,}
        }>

        </TypewriterComponent>
        </h1>
        </div>
        <div>
          <img src={homemain} className="w-full  aspect square "/> 
        </div>
    </div>
    </div>
  )
}
