import React from 'react'
import "./Signup.css"
import { MdOutlinePersonAddAlt } from "react-icons/md";
function Signup() {
  return (
    <div id='signup'>
       <form action="">
    <span id='signuptitle'>SignUp Page</span>
       <div className='list'>
           <label htmlFor='name'>UserName</label>
           <input type='text' id='name' required/>
       </div>
       <div className='list'>
           <label htmlFor='email'>Email</label>
           <input type='text' id='email' required/>
       </div>
       <div className='list'>
           <label htmlFor='pass1'>Password</label>
           <input type='password' id='pass1' required/>
       </div>
        <div className='list'>
           <label htmlFor='conpass1'>Confirm Password</label>
           <input type='password' id='conpass1' required/>
       </div>
       <button id='signupbtn'>SignUp <MdOutlinePersonAddAlt /></button>
    </form>
    </div>
  )
}

export default Signup
