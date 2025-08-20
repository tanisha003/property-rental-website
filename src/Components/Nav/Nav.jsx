import React, { useState } from 'react'
import "./Nav.css"
import logo from "../../assets/p.jpg"
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaFireAlt } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { MdBedroomParent } from "react-icons/md";
import { PiFarmFill } from "react-icons/pi";
import { MdOutlinePool } from "react-icons/md";
import { MdOutlineCabin } from "react-icons/md";
import { GiShop } from "react-icons/gi";
import { MdApartment } from "react-icons/md";
function Nav() {
    let [visible,setvisible]=useState(false)
  return (
    
    <div id='Nav'>
    {visible? <div className='hamburger'>
        <div className='ham1'>Login</div>
        <div className='ham1'>Signup</div>
        <div className='ham1'>List Your Home</div>
        <div className='ham1'>Help Center</div>
    </div>:
    <div></div>}
      <div className='nav1'>
        <div className='logo'>
            <img src={logo} alt=''width="50px"/>
            <h1>PrimeStay</h1>
        </div>
        <div className='search'>
            <input type='text' placeholder='Search Destination'/>
            <button><span>Search</span> <CiSearch /></button>
        </div>
        <div className='ham'>
            <button id='btn1'>List Your Home</button>
            <button id='btn2' onClick={()=>{
                setvisible(prev=>!prev)
            }}>
            <GiHamburgerMenu id="svg1"/>
            <CgProfile id="svg2"/>
            </button>
        </div>
      </div>
      <div className='nav2'>
        <div className='svg11'><FaFireAlt /><h3>Trending</h3></div>
        <div className='svg11'><FaHouse /><h3>Houses</h3></div>
        <div className='svg11'><MdBedroomParent /><h3>Rooms</h3></div>
        <div className='svg11'><PiFarmFill /><h3>Farm Houses</h3></div>
        <div className='svg11'><MdOutlinePool /><h3>Pool Houses </h3></div>
        <div className='svg11'><MdOutlineCabin /><h3>Cabins</h3></div>
        <div className='svg11'><GiShop /><h3>Shops</h3></div>
        <div className='svg11'><MdApartment /><h3>Pent Houses</h3></div>
      </div>
    </div>
  )
}

export default Nav
