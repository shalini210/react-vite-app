import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import boyimg from "./assets/images/boy1.png"
import './App.css'
import AboutMe from './components/AboutMe'
import Workingwithevent from './components/Workingwithevent'
import Calculate from './components/Calculate'
import UsingReference from './components/UsingReference'
import Valueswithstate from './components/Valueswithstate'
import Task from './components/Task'
import ItemManager from './components/ItemManager'
function App() {
   return (
    <>
    <div className='px-4'>
    <ItemManager></ItemManager>
    {/* <Task></Task> */}
    {/* <Valueswithstate></Valueswithstate> */}
    {/* <Calculate></Calculate> */}
    {/* <UsingReference></UsingReference>
    <Workingwithevent></Workingwithevent> */}
    {/* <AboutMe userimg={boyimg}
     username="John Capner"
      summary="lorm ipsum You can also directly specify the project name and the template you want to use via additional command line options. 
    "
     skills={["HTML","CSS","CSS3","TAILWIND", "REACT"]}></AboutMe> */}
    
    </div>
    </>)
}

export default App
