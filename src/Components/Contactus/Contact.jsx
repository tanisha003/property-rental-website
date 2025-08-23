import React from 'react'
import "./Contact.css"
import { MdContactMail } from "react-icons/md";
function Contact() {
  return (
    <div id='contact'>
       <form action="https://formspree.io/f/mnnzeewz" method='POST'>
          <span id='contacttitle'>Contact Us</span>
             <div className='list'>
                 <label htmlFor='name1'>UserName</label>
                 <input name='username' id='name1' required/>
             </div>
             <div className='list'>
                 <label htmlFor='email'>Email</label>
                 <input name='email' type='text' id='email' required/>
             </div>
             <div className='list'>
                 <label htmlFor='mess'>Message</label>
                 <textarea name='message' id='mess'></textarea>
             </div>
             <button id='contactbtn'>Submit<MdContactMail /></button>
          </form>
    </div>
  )
}

export default Contact
