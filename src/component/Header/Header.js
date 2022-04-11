import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
    <div className='top-headers'>
        <div className="logo">
            <img src='https://www.pngkey.com/png/full/986-9860667_hospital-management-system-png.png' alt="Reload image" />
            <h3>HOSPITAL MANAGEMENT SYSTEM</h3>
        </div>
        <div className="info">
            <div className="info-box">
            <i class="fa-solid fa-phone"></i>
              <div className="info-para">
                <p>+91000000000</p>
                <p>120043007800</p>
              </div>
            </div>
            <div className="info-box">
            <i class="fa-solid fa-envelope"></i>
            <div className="info-para">
              <p>example@gmail.com</p>
              <p>example@gmail.com</p>
            </div>
            </div>
            <div className="info-box">
            <i class="fa-solid fa-location-dot"></i>
            <div className="info-para">
              <p>1339/17 Phase 11</p>
              <p>Mohali , PUNJAB</p>
            </div>
            </div>
        </div>
    </div>
    <div className="subheader">
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/appointment'>APPOINTMENT</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
            <li><Link to='/login'>LOG IN</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Header;