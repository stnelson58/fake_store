import React from 'react';
import './Footer.css';
import { AiTwotoneHeart} from "react-icons/ai";


// AiTwotoneHeart

function Footer() {

  return (
    <div className=' footer-container'>
      <p>Made with <AiTwotoneHeart className='hrt'/> by mimo</p>
      <a href="/contactus">Contact us</a>
    </div>
  )
}

export default Footer