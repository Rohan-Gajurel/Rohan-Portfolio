import React from 'react'
import './footer.css'
import logo from "../../assets/logo.svg"
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="Logo" />
          <p>I am a frontend developer from Nepal with 1 year of experience in multiple companies.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <button className="footer-subscribe">Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2025 Rohan Gajurel. All rights reserved.</p>
      </div>
    </footer>
  )
}
export default Footer