import React from 'react';
import './Footer.css';
import { AiTwotoneHeart} from "react-icons/ai";
import { Link } from 'react-router-dom';



// AiTwotoneHeart

function Footer() {

  return (
    <div className=' footer-container'>
      <p>Made with <AiTwotoneHeart className='hrt'/> by mimo</p>
      <Link className='contact' to="/contactus">Contact Us</Link>
    </div>
  )
}

export default Footer