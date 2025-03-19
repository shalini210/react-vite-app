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
import {Routes,Route} from "react-router-dom"
import {Link} from "react-router"
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import "flowbite"
import Particle from './components/Particle'
import Stateeg1 from './components/Stateeg1'
import Homewithlogin from './components/Homewithlogin'
import Logout from './components/Logout'
import Login from './components/Login'
import Exampleofuseeffect from './components/Exampleofuseeffect'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
function App() {
   return (
    <>
    <div className='px-4'>
      <Navbar></Navbar>
     

      <Routes>
        
        <Route path='/productdetails/:pid' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/useEffecteg' element={<Exampleofuseeffect></Exampleofuseeffect>}></Route>
        <Route path='/homewithlogin' element={<Homewithlogin></Homewithlogin>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/logout' element={<Logout></Logout>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/forstate' element={<Stateeg1></Stateeg1>}></Route>
        
      </Routes>
      
    {/* <ItemManager></ItemManager> */}
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
