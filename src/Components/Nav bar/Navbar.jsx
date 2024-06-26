import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {

    const [menu,setMenu] = useState("shop");


  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p> E-SHOPPEY </p>
        </div>
        <ul className="nav-menu">
            <Link to='/Shop'><li onClick={()=>{setMenu("shop")}}>Shop {menu=== "shop"?<hr/>:<></>} </li></Link>
            <Link to='/mens'><li onClick={()=>{setMenu("mens")}}>Men {menu=== "mens"?<hr/>:<></>}</li></Link>
            <Link to='/womens'><li onClick={()=>{setMenu("womens")}}>Women{menu=== "womens"?<hr/>:<></>}</li></Link>
            <Link to='/kids'><li onClick={()=>{setMenu("kids")}}>Kids{menu=== "kids"?<hr/>:<></>}</li></Link>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>

    </div>
  )
}


export default Navbar