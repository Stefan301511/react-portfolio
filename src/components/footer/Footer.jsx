import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href="sdd" className='footer__logo'>Stefan</a>

      <ul className='permalinks'>
        <li><a href="sdsd">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

       <div className="footer footer__socials">
        <a href="https://facebook.com"><AiFillFacebook/></a>
        <a href="https://instagram.com"><AiOutlineInstagram/></a>
        <a href="https://twitter.com"><AiOutlineTwitter /></a>
       </div>


       <div className="footer__copyright">
          <small>&copy; Stefan Popovic. All rights reserved</small>
       </div>
    </footer>
  )
}

export default footer