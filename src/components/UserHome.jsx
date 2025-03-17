import React from 'react'
import { Link } from 'react-router'
import Products from './Products';

export default function UserHome(props) {
    // userLogin={userlogin} setuserlogin={setuserlogin}
let userLogin = props.userLogin;
let setuserLogin = props.setUserLogin
//   props.setuserlogin(true)
  return (
    <div><nav>
        {/* <Products userLogi={userLogin}></Products> */}
        <li><Link to="/Products" > Products</Link></li>
        <li>Cart</li>
        <li>your orders</li>
        <li>profile</li>
        
        {/* <li></li> */}
        </nav></div>
  )
}
