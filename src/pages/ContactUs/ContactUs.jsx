import React from 'react'
import './ContactUs.css'



function ContactUs() {
  return (
    <div className="contact-container">
    <form>
        <h1>Contact Us</h1>
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
        <textarea placeholder='Write your message here' cols="30" rows="10"></textarea>
        <button>Submit</button>



    </form>
    </div>
  )
}

export default ContactUs