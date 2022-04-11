import React from 'react'
import './Header.css'

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
            <li>HOME</li>
            <li>ABOUT</li>
            <li>APPOINTMENT</li>
            <li>CONTACT</li>
            <li>LOG IN</li>
          </ul>
        </div>
    </div>
  )
}

export default Header;